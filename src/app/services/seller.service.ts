import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  private http: any;

  constructor() {}

    userSignUp(data:any){
    return this.http.post('http://localhost:3000/seller-auth')

    }
  }

