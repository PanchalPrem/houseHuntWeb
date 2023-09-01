import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './shared-Component/header/header.component';
import { FooterComponent } from './shared-Component/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { ContectComponent } from './component/contect/contect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { HomeBookComponent } from './component/home-book/home-book.component';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyBookingComponent } from './component/my-booking/my-booking.component';
import { ToastrModule } from 'ngx-toastr';
import { FootermenuComponent } from './shared-Component/footermenu/footermenu.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContectComponent,
    HomeBookComponent,
    MyBookingComponent,
    FootermenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,NgbDropdownModule,ToastrModule.forRoot(),FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
