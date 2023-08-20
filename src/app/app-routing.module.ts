import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './shared-Component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { ContectComponent } from './component/contect/contect.component';
import { HomeDetailsComponent } from './component/home-details/home-details.component';
import { HomeBookComponent } from './component/home-book/home-book.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contect',component:ContectComponent},
  {path:'home-details/:id',component:HomeDetailsComponent},
  {path:'book/:id',component:HomeBookComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
