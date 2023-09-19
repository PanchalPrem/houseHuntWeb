import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiServiceService } from 'src/api-service.service';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalConfig,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class HomeComponent implements OnInit {
  housedata: any = [];
  imageurl: any;
  pinCode: string = '';
  itemsPerPage: number = 10;
  currentPage: number = 1;
  loader: boolean = false;
  searching: any = [];
  constructor(
    private service: ApiServiceService,
    private modalService: NgbModal,
    private toster: ToastrService
  ) {}

  ngOnInit(): void {
    let checkPin = localStorage.getItem('pinCode');
    // if (checkPin==(null)) {
    //   $('.btn-outline-primary').trigger('click')
    // }else{
    //   this.getHouse(checkPin);
    // }
    this.getHouse();
  }
  open(data: any) {
    this.modalService.open(data, { backdrop: 'static' });
  }
  // submit(){
  //   $('.close-reg').trigger('click')
  //   localStorage.setItem('pinCode',this.pinCode)
  //  this.getHouse(this.pinCode);
  // }

  //  async getHouse(data1:any) {
  async getHouse() {
    this.loader = true;
    let data = { text: '' };
    await this.service.gtehouse(data).subscribe((res: any) => {
      if (res.ErrorCode == 200) {
        this.housedata = res.data;
        this.imageurl = res.filePath;
        this.loader = false;
      } else {
        this.toster.warning('Something want wrong');
        this.loader = false;
      }
    });
  }

  get totalPages(): number {
    return Math.ceil(this.housedata.length / this.itemsPerPage);
  }

  get itemsToShow(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.housedata.slice(startIndex, endIndex);
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  search(data: any) {
    let data1 = { text: data.value };
      if (data.value == '') {
        this.searching = [];
        let data1 = { text: '' };
        this.service.gtehouse(data1).subscribe((res: any) => {
          this.housedata = res.data;
        });
      }else{
        this.service.gtehouse(data1).subscribe((res: any) => {
          this.searching = res.data;
        });
      }

  }
  searchval(data: any) {
    $('#autocompleteid2').val(data);
    this.searchHouse()
    this.searching = [];
  }
  searchHouse() {
    let data = $('#autocompleteid2').val();
    let data1 = { text: data };
    console.log(data1);
    this.service.gtehouse(data1).subscribe((res: any) => {
      this.searching = [];
      this.housedata = res.data;
    });
  }
}
