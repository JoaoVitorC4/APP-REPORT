import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api = "http://127.0.0.1:8000/api";

  constructor(private http:HttpClient) { 

  };

  public salvarUser(user: User) {
    return this.http.post(`${this.api}/user`, user).toPromise();
  }
  public Login(user: User){
    return this.http.post(`${this.api}/login`, user).toPromise();
  }

  // public MostradadosUsuario(id: number){
  //   return this.http.get(`${this.api}/userdata`,id).get;
  // }


}
