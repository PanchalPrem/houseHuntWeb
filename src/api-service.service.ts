import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  url: any = 'https://astroshines.com:6001/';
  constructor(private http: HttpClient) {}

  inquiry(data: any) {
    return this.http.post<any>(this.url + 'enquery', data);
  }

  gtehouse(data: any) {
    return this.http.post<any>(this.url + 'list', data);
  }

  signIn(data: any) {
    return this.http.post<any>(this.url + 'user-sign-in', data);
  }

  signUp(data: any) {
    return this.http.post<any>(this.url + 'user-sign-up', data);
  }
  getHouseDetailbyId(data: any) {
    return this.http.get<any>(this.url + 'house-detail?_id=' + data);
  }

  houseBook(data: any) {
    return this.http.post<any>(this.url + 'book-house', data);
  }
  userData: any;
  myBooking() {
    this.userData = localStorage.getItem('userData');
    let token:any = JSON.parse(this.userData);
    let key = localStorage.getItem('loginKey');

    let header: any = new HttpHeaders()
      .set('Authorization', `Bearer ${token.authToken}`)
      .set('authkey', '' + key);
    return this.http.get<any>(this.url + 'user-booking-list', {
      headers: header,
    });
  }
}
