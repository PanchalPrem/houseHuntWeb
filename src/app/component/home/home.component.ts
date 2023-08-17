import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  housedata: any = [];
  constructor(private service: ApiServiceService) {}

  ngOnInit(): void {
    this.getHouse();
  }

  getHouse() {
    let data = { text: 'indore' };
    this.service.gtehouse(data).subscribe((res: any) => {
      this.housedata = res.data;
      console.log(res.data);
    });
  }
}
