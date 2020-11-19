import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) { }


  getUsers() {
    return this.http.get<any>(environment.api + 'user/').pipe(map(res => {
      return res;
    }))
  }

  setUser(id, username) {
    return this.http.put<any>(environment.api + `user/${id}/`, { id: id, username: username }).pipe(map(res => {
      return res;
    }))
  }

  addUser(username, password) {
    return this.http.post<any>(environment.api + `user/`, { username: username, password: password }).pipe(map(res => {
      return res;
    }))
  }

  deleteUser(id) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        id: id
      }
    }
    return this.http.delete<any>(environment.api + `user/${id}/`, options).pipe(map(res => {
      return res;
    }))
  }

}
