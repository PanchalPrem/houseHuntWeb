import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from 'src/app/shared-Component/header/header.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild(HeaderComponent) header: any;
userdetails:any=[]
  constructor() { }

  ngOnInit(): void {
this.userdetails=localStorage.getItem('userData')
this.userdetails=JSON.parse(this.userdetails)
console.log(this.userdetails);

  }
  logout(){
this.header.logOut()
  }

}
