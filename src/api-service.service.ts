import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  url: any = 'https://astroshines.com:6001/';
  constructor(private http: HttpClient) {}

  inquiry(data: any) {
    return this.http.post<any>(this.url + 'enquery', data);
  }

  gtehouse(data:any){
    return this.http.post<any>(this.url + 'list', data);
  }

  signIn(data:any){
    return this.http.post<any>(this.url + 'user-sign-in', data);
  }

  signUp(data:any){
    return this.http.post<any>(this.url + 'user-sign-up', data);
  }
}
