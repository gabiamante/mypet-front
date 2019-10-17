import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { LocalUser } from './auth/credentials/local_user';
import { TokenService } from './auth/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authenticated$: Observable<boolean>;
  user$: Observable<any>;

  constructor(private tokenService: TokenService){
    this.authenticated$ = this.tokenService.isLoggedIn();
    this.user$ = this.tokenService.getUser();
  }

  ngOnInit(){}

  logout(){
      this.tokenService.logout();
      window.location.href = 'home/home';      
  }
}
