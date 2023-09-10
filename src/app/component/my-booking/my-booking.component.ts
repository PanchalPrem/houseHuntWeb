import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/api-service.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {

  constructor(private service:ApiServiceService,private router:Router) { }

  ngOnInit(): void {

  this.service.myBooking().subscribe((res:any)=>{
console.log(res);


    })
  }
  viewBookingDetails(){
// alert()
this.router.navigateByUrl('/booking-details')
  }

}
