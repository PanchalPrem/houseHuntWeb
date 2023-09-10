import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/api-service.service';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalConfig,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var $: any;
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home-book',
  templateUrl: './home-book.component.html',
  styleUrls: ['./home-book.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class HomeBookComponent implements OnInit {
  routeid: any;
  houseDetails: any = [];
  imageUrl: any = 'https://househuntt.com/apiHouse/assets/house/';
  constructor(
    private route: ActivatedRoute,
    private service: ApiServiceService,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private fb: FormBuilder, private toster: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.routeid = this.route.snapshot.params['id'];
    this.gethouseDetails();
  }
  gethouseDetails() {
    this.service.getHouseDetailbyId(this.routeid).subscribe((res: any) => {
      if (res.ErrorCode == 200) {
        this.houseDetails = res.data[0];
        this.imageUrl = res.filePath;

      } else {
        alert(res.ErrorMessage);
      }
    });
  }
  openWindowCustomClass(content: any) {
    let isLogin = localStorage.getItem('logId');
    let Details: any = localStorage.getItem('userData');
    let userDetails = JSON.parse(Details);

    if (isLogin != null) {
      let data = {
        number: 8596857485,
        email: userDetails.email,
        username: userDetails.name,
        houseId: this.houseDetails._id,
        brokerId: this.houseDetails.brokerId,
        userId: isLogin,

      };
      console.log('data', data);

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be book house",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm',
      }).then((result) => {
        if (result.isConfirmed) {
          this.service.houseBook(data).subscribe((res: any) => {

            if (res.ErrorCode == 200) {
              this.toster.success(res.ErrorMessage);
              this.router.navigateByUrl('/my-Booking')
            } else {
              this.toster.warning(res.ErrorMessage);
            }

          });
        }
      });
    } else {
      $('.show-reg-form').trigger('click');
      // this.modalService.open(content, {  size: 'lg' });
    }

    // let options: NgbModalOptions = {
    //  windowClass : "myCustomModalClass"
    // };
    // this.modalService.open(content, {  size: 'lg' });
  }
}
