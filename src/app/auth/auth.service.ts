import { Injectable } from '@angular/core';

import { TokenService } from './token.service';

import { HttpResponse, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { Credentials } from './credentials/credentials';
import { StorageService } from './storage.service';
import { LocalUser } from './credentials/local_user';
import{JwtHelper} from 'angular2-jwt';
import { PessoaService } from '../pessoa/pessoa.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  collectFailedRequest(request: HttpRequest<any>) {
    throw new Error("Method not implemented.");
  }

  jwtHelper: JwtHelper = new JwtHelper();
  public pessoa: any

  static readonly TOKEN_STORAGE_KEY= 'token';
  cachedRequests: Array<HttpRequest<any>> = [];

  constructor(private router: Router, private tokenService: TokenService,public storage: StorageService,  public buscaEmail: PessoaService) { }

  sucessFulLogin(authorizationValue : string){
    let tok = authorizationValue.substring(7);

    let user: LocalUser = {
      token: tok,
      email: this.jwtHelper.decodeToken(tok).sub

  };
  this.storage.setLocalUser(user);
}

public logout(){
  this.storage.setLocalUser(null);
}

  public login(credentials: Credentials): void {
    this.tokenService.getResponseHeaders(credentials)
    .subscribe((res: HttpResponse<any>) => {
      this.sucessFulLogin(res.headers.get('authorization'));


      const token = localStorage.getItem("localUser")
      var obj = JSON.parse(token)

    this.buscaEmail.buscarEmailLoginConjunto(obj.email).subscribe((perfil) => {
      this.pessoa = perfil

    if(this.pessoa.perfil == "SERVICO"){
        this.router.navigate(['login/tela-inicial-pet-provider']);
      }
    else
      if(this.pessoa.perfil == "CLIENTE"){
        this.router.navigate(['login/tela-inicial-pet-client']);
      }
      else
        if(this.pessoa.perfil == "ADMIN"){
          this.router.navigate(['administrador/menu-inicial-admin']);
        }

      })
    });
  }

  public retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }

  private saveToken(token: string){
    localStorage.setItem(AuthService.TOKEN_STORAGE_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(AuthService.TOKEN_STORAGE_KEY);
  }

  public isLoggedIn(): boolean {
    return !!this.getToken();
  }

}
