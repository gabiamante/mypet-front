import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Credentials } from 'src/app/auth/credentials/credentials';
import { tap, map, catchError } from 'rxjs/operators';
import { LocalUser } from './credentials/local_user';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Local } from 'protractor/built/driverProviders';
import { stringify } from '@angular/core/src/render3/util';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  observe: 'response' as 'response'
};
const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private subjUser$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private subjLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  public getResponseHeaders(credentials: Credentials) {
    let loginUrl = API_URL + '/login';
    return this.http.post(loginUrl, credentials, httpOptions).pipe(
      tap(() => {
        this.subjLoggedIn$.next(true);
        this.subjUser$.next(true);
      })
    );
  }

  public logout() {
    let logoutUrl = API_URL + '/logout';
    localStorage.removeItem("localUser")
    this.subjLoggedIn$.next(false);
    this.subjUser$.next(false);
    return this.http.get(logoutUrl, {responseType: 'text'});
  }

  public isLoggedIn(): Observable<boolean> {
    const token = localStorage.getItem('token')
    if(token && !this.subjLoggedIn$.value){
      return this.checkTokenValidation();
    }
    return this.subjLoggedIn$.asObservable();
  }

  checkTokenValidation(): Observable<boolean> {
    var token = localStorage.getItem('token')
    console.log('entrou')
    return this.http.get<boolean>(API_URL + '/loginConjunto' + token)
    .pipe(
      tap((u: boolean) => {
        if(u){
        this.subjLoggedIn$.next(true);
        this.subjUser$.next(true);
      }
    }),
      map((u: boolean) => (u)?true:false),
      catchError((err) => {
        this.logout();
        return of(false);
      })
    );
  }

  getUser(): Observable<any>{
    return this.subjUser$.asObservable();
  }
}
