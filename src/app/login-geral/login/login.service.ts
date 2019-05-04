import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  verificaLogin(email: string, password: string) {
    return this.http.get<any>(API + '/perfil');
  }
}
