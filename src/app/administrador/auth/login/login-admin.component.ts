import { AuthService } from '../auth.service';

import { Component, OnInit,  } from '@angular/core';
import { Credentials } from '../credentials/credentials';



@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
 styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit{

  credentials: Credentials = new Credentials('', '');


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public login(): void {
    this.authService.login(this.credentials);
    window.location.href = 'administrador/menu-inicial-admin';
  }

}

