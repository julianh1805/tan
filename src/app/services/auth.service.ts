import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = {
    'Access-Control-Allow-Origin': '*'
  }

  requestOptions = {
    headers: new HttpHeaders(this.headers),
  };

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) { }



  signIn(username, password) {
    return this.http.post<any>(environment.api + 'connexion/', { username: username, password: password }, this.requestOptions).pipe(map(res => {
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
      const user = new User(username, res.token, expirationDate);
      this.user.next(user);
      localStorage.setItem('user', JSON.stringify(user));
      return res;
    }))
  }

  autoAuth() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user._tokenExpirationDate <= new Date()) {
      this.logout();
    } else {
      if (user._token) {
        const loadedUser = new User(user.username, user._token, user._expirationDate)
        this.user.next(loadedUser);
      }
    }
  }

  logout() {
    this.user.next(null);
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }

}
