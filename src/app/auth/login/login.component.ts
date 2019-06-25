import { AuthService } from '../auth.service';

import { Component, OnInit,  } from '@angular/core';
import { Credentials } from '../credentials/credentials';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
 styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  credentials: Credentials = new Credentials('', '');


  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public login(): void {
    this.authService.login(this.credentials);
    window.location.href = 'home/home';
  }

}

