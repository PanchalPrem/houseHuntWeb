import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/api-service.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css'],
})
export class MyBookingComponent implements OnInit {
  constructor(private service: ApiServiceService, private router: Router) {}
myBookig:any=[]
  ngOnInit(): void {
    this.service.myBooking().subscribe((res: any) => {
      if (res.ErrorCode==200) {
        this.myBookig=res.data
        localStorage.setItem('totalBookig',this.myBookig.length)
      }
      console.log(res);
    });
  }
  viewBookingDetails(value:any) {
    let data=JSON.stringify(value)
    localStorage.setItem("bookigData",data)
    this.router.navigateByUrl('/booking-details');
  }
}
