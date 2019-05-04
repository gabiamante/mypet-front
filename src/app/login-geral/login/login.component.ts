import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { PetClient } from '../../pet-clients/pet-client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public petclient: PetClient = new PetClient();

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }


  public verificaLogin() {
    this.loginService.verificaLogin(this.petclient.email, this.petclient.password).subscribe(
      response => {
        alert('Usuário encontrado');
      }
    );
  }

}
