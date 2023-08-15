import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './shared-Component/header/header.component';
import { FooterComponent } from './shared-Component/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { ContectComponent } from './component/contect/contect.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
