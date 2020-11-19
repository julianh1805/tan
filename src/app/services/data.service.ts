import { environment } from './../../environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private http: HttpClient) { }

  getDatas(annee, mois, jour, ligne) {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('annee', annee);
    httpParams = httpParams.append('mois', mois);
    httpParams = httpParams.append('jour', jour);
    httpParams = httpParams.append('ligne', ligne);
    return this.http.get<any>(environment.api + 'datas/', { params: httpParams }).pipe(map(res => {
      return res;
    }))
  }
  // getLignes() {
  //   return this.http.get<any>(environment.api + 'ligne/').pipe(map(res => {
  //     return res;
  //   }))
  // }

  // getTrams() {
  //   return this.http.get<any>(environment.api + 'tram/').pipe(map(res => {
  //     return res;
  //   }))
  // }

  // getTrajets() {
  //   return this.http.get<any>(environment.api + 'trajet/').pipe(map(res => {
  //     return res;
  //   }))
  // }

}
