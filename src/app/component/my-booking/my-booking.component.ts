import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ApiServiceService } from 'src/api-service.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {

  constructor(private service:ApiServiceService) { }

  ngOnInit(): void {

  this.service.myBooking().subscribe((res:any)=>{


    })
  }

}
