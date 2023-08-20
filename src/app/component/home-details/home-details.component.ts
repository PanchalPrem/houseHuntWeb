import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/api-service.service';
import { NgbActiveModal, NgbModal, NgbModalConfig, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css'],
  providers: [NgbModalConfig, NgbModal],

})
export class HomeDetailsComponent implements OnInit {
  routeid: any;
  houseDetails:any=[]
  imageUrl:any='https://househuntt.com/apiHouse/assets/house/'
  constructor(
    private route: ActivatedRoute,
    private service: ApiServiceService,config: NgbModalConfig, private modalService: NgbModal,  private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.routeid = this.route.snapshot.params['id'];
    this.gethouseDetails()
  }
  gethouseDetails() {
    this.service.getHouseDetailbyId(this.routeid).subscribe((res: any) => {
      if (res.ErrorCode==200) {
        this.houseDetails=res.data[0]
        this.imageUrl=res.filePath
        console.log(this.houseDetails);

      } else {
        alert(res.ErrorMessage)
      };
    });
  }
  openWindowCustomClass(content: any) {
    let options: NgbModalOptions = {
     windowClass : "myCustomModalClass"
    };
    this.modalService.open(content, {  size: 'lg' });
  }
}
