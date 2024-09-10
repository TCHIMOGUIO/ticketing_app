import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiurl: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }


  login(obj: any) {
    //debugger;
    return this.http.post(this.apiurl + "login", obj)
  }
}
