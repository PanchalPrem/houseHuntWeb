import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
viewBookigData:any=[]
  constructor() { }

  ngOnInit(): void {
    this.viewBookigData=  localStorage.getItem('bookigData')
    this.viewBookigData=JSON.parse(this.viewBookigData)
  }

}
