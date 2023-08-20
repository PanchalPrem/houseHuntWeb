import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/api-service.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css'],
})
export class HomeDetailsComponent implements OnInit {
  routeid: any;
  houseDetails:any=[]
  constructor(
    private route: ActivatedRoute,
    private service: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.routeid = this.route.snapshot.params['id'];
    this.gethouseDetails()
  }
  gethouseDetails() {
    this.service.getHouseDetailbyId(this.routeid).subscribe((res: any) => {
      if (res.ErrorCode==200) {
        this.houseDetails=res.data[0]
      } else {
        alert(res.ErrorMessage)
      };
    });
  }
}
