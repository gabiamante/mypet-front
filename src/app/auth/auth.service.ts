import { Injectable } from '@angular/core';

import { TokenService } from './token.service';

import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Credentials } from './credentials/credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  static readonly TOKEN_STORAGE_KEY = 'token';
  //redirectToUrl: string = '/home';

  constructor(private router: Router, private tokenService: TokenService) { }

  public login(credentials: Credentials): void {
    this.tokenService.getResponseHeaders(credentials)
    .subscribe((res: HttpResponse<any>) => {
      this.saveToken(res.headers.get('authorization'));
    //  this.router.navigate([this.redirectToUrl]); redirecionar para outra pagina
      alert("Bem vindo");
    });
  }

  private saveToken(token: string){
    localStorage.setItem(AuthService.TOKEN_STORAGE_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(AuthService.TOKEN_STORAGE_KEY);
  }

  public logout(): void {
    this.tokenService.logout()
    .subscribe(() =>{
      localStorage.removeItem(AuthService.TOKEN_STORAGE_KEY);

    });
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();


  }
}
