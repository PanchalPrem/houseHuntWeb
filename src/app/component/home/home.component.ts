import { Component, OnInit, ViewChild ,ElementRef} from '@angular/core';
import { ApiServiceService } from 'src/api-service.service';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalConfig,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
 declare var $:any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbModalConfig, NgbModal],

})
export class HomeComponent implements OnInit {
  housedata: any = [];
  imageurl:any
  pinCode:string='';

  itemsPerPage: number = 10;
  currentPage: number = 1;

  constructor(private service: ApiServiceService,  private modalService: NgbModal,) {}

  ngOnInit(): void {
    let checkPin=localStorage.getItem('pinCode')
    if (checkPin==(null)) {
      $('.btn-outline-primary').trigger('click')
    }else{
      this.getHouse(checkPin);
    }

  }
  open(data:any){
    this.modalService.open(data,{backdrop:'static'})
  }
  submit(){
    $('.close-reg').trigger('click')
    localStorage.setItem('pinCode',this.pinCode)
   this.getHouse(this.pinCode);
  }

 async getHouse(data1:any) {
    let data = { text: data1 };
   await this.service.gtehouse(data).subscribe((res: any) => {
      this.housedata = res.data;
      this.imageurl=res.filePath

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
}
