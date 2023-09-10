import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './shared-Component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { ContectComponent } from './component/contect/contect.component';
import { HomeBookComponent } from './component/home-book/home-book.component';
import { MyBookingComponent } from './component/my-booking/my-booking.component';
import { PrivacyPolicyComponent } from './component/privacy-policy/privacy-policy.component';
import { BookingDetailsComponent } from './component/booking-details/booking-details.component';
import { ProfileComponent } from './component/profile/profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contect',component:ContectComponent},
  {path:'my-Booking',component:MyBookingComponent},
  {path:'book/:id',component:HomeBookComponent},
  {path:'privacy-policy',component:PrivacyPolicyComponent},
  {path:'booking-details',component:BookingDetailsComponent},
  {path:'profile',component:ProfileComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
