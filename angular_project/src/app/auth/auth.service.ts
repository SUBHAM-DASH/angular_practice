import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signUp(data:any){
    return this.http.post("http://localhost:9000/api/userdetails",data);
  }
}
