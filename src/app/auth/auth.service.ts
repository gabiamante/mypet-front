import { Injectable } from '@angular/core';

import { TokenService } from './token.service';

import { HttpResponse, HttpRequest, HttpClient } from '@angular/common/http';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { Credentials } from './credentials/credentials';
import { StorageService } from './storage.service';
import { LocalUser } from './credentials/local_user';
import{JwtHelper} from 'angular2-jwt';
import { PessoaService } from '../pessoa/pessoa.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

const API_URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subjUser$: BehaviorSubject<LocalUser> = new BehaviorSubject(null);
  private subjLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  collectFailedRequest(request: HttpRequest<any>) {
    throw new Error("Method not implemented.");
  }

  jwtHelper: JwtHelper = new JwtHelper();
  public pessoa: any

  static readonly TOKEN_STORAGE_KEY= 'token';
  cachedRequests: Array<HttpRequest<any>> = [];

  constructor(
    private router: Router, 
    private tokenService: TokenService,
    public storage: StorageService, 
    public buscaEmail: PessoaService,
    private http: HttpClient) { }

  sucessFulLogin(authorizationValue : string){
    let tok = authorizationValue.substring(7);

    let user: LocalUser = {
      token: tok,
      email: this.jwtHelper.decodeToken(tok).sub

  };
  this.storage.setLocalUser(user);
  this.subjLoggedIn$.next(true);
  this.subjUser$.next(user);
}
  
public logout(){
  this.storage.setLocalUser(null);
  localStorage.removeItem('localUser');
  this.subjUser$.next(null);
  this.subjLoggedIn$.next(false);
}

  public login(credentials: Credentials): void {
    this.tokenService.getResponseHeaders(credentials)
    .subscribe((res: HttpResponse<any>) => {
      this.sucessFulLogin(res.headers.get('authorization'));


      const token = localStorage.getItem("localUser")
      var obj = JSON.parse(token)

    this.buscaEmail.buscarEmailLoginConjunto(obj.email).subscribe((perfil) => {
      this.pessoa = perfil

      console.log(this.pessoa.active)
      if(this.pessoa.active == 1){
        window.location.href = '/home/home';     }
      else{
        Swal.fire({
          title: 'Usuário desativado',
          text: "Deseja reativar seu usuário?",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sim',
          cancelButtonText: 'Não'
        }).then((result) => {
          if (result.value) {
            Swal.fire(
              'Conta reativada!',
              'Você será direcionado para efetuar o login',
              'success'
            )
            window.location.href = '/login';
          }
          else{
            Swal.fire(
              'Conta não foi reativada!',
              'Redirecionando para Home...'
            )
            window.location.href = '/home/home';
          }
        })
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

  public isAuthenticated(): Observable<boolean>{
    const token = localStorage.getItem("localUser")
    if(token && !this.subjLoggedIn$.value){
      return this.checkTokenValidation();
    }
    return this.subjLoggedIn$.asObservable();
  }

  checkTokenValidation(): Observable<boolean>{

    const email = localStorage.getItem("localUser")
    const obj = JSON.parse(email)

    if(email == null){
        this.logout();
        console.log("logout")
        return of(false);
    }else{
      return this.http.get<LocalUser>(API_URL + '/loginConjunto/email?value=' + obj.email)
      .pipe(
        tap((u: LocalUser) =>{
          if(u){
            this.subjUser$.next(u);
            this.subjLoggedIn$.next(true);
          }
        }),
        map((u: LocalUser) => (u)?true:false),
        catchError((err) => {
          this.logout();
          return of(false);
        })
      );
    }
  }

  checkProfile(){
    const token = localStorage.getItem("localUser")
    var obj = JSON.parse(token)

    this.buscaEmail.buscarEmailLoginConjunto(obj.email).subscribe((perfil) => {
      this.pessoa = perfil

    if(this.pessoa.perfil == "SERVICO"){
        this.router.navigate(['login', 'tela-inicial-pet-provider']);
      }
      else
        if(this.pessoa.perfil == "CLIENTE"){
          this.router.navigate(['login', 'tela-inicial-pet-client']);
        }
      else
        if(this.pessoa.perfil == "ADMIN"){
          this.router.navigate(['administrador', '']);
        }
    })
      this.router.navigate(['home', 'home']);
  }

  public getUser(): Observable<LocalUser>{
    return this.subjUser$.asObservable();
  }
}
