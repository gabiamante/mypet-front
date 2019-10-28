import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { LocalUser } from './auth/credentials/local_user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authenticated$: Observable<boolean>;
  user$: Observable<LocalUser>;

  constructor(
    private router: Router,
    private authService: AuthService){
      this.authenticated$ = this.authService.isAuthenticated();
      this.user$ = this.authService.getUser();
      this.router = router;
  }

  login(){
    this.router.navigate(['/login'])
  }

  cadastroCliente(){
    this.router.navigate(['pessoa', 'fisica', 'cadastrar']);
  }

  cadastroFornecedor(){
    this.router.navigate(['pessoa', 'juridica', 'cadastrar']);
  }

  logout(){
    this.authService.logout();
  }
}
