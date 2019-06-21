import { TestBed, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { TokenService } from './token.service';

//import { Observable } from 'rxjs';
import { Credentials } from 'src/app/auth/credentials/credentials';
import { Observable } from 'rxjs';

describe('AuthService', () => {
  let injector: TestBed;
  let service: AuthService;
  let tokenService: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService
       ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    });
    injector = getTestBed();
    service = injector.get(AuthService);
    tokenService = injector.get(TokenService);
  });

  it('Deve ser criado', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  //it('Deve ter opção de  redirectToUrl definida como padrão "cookies" by default', () => {
   // expect(service.redirectToUrl).toEqual('/cookies');
  //}); esta  no auth service o caminho

  it('Deve charmar o serviço de token para o ResponseHeaders ao efetuar login em um usuario', () => {
    spyOn(tokenService, 'getResponseHeaders').and.returnValue(new Observable<string>());
    service.login(new Credentials('',''));
    expect(tokenService.getResponseHeaders).toHaveBeenCalled();
  });

  it('should return false from isLoggedIn() method by default', () => {
    expect(service.isLoggedIn()).toEqual(false);
  });

  it('should return false from isLoggedIn() method when user is logged out', () => {
    spyOn(tokenService, 'logout').and.returnValue(new Observable<string>());
    service.logout();
    expect(service.isLoggedIn()).toEqual(false);
  });
});
