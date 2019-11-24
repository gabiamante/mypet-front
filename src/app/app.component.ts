import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';
import { LocalUser } from './auth/credentials/local_user';
import { PessoaService } from './pessoa/pessoa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authenticated$: Observable<boolean>;
  user$: Observable<LocalUser>;
  @Input() nome: string;
  pessoa: any;

  constructor(
    private router: Router,
    private authService: AuthService, 
    public buscaEmail: PessoaService){
      this.authenticated$ = this.authService.isAuthenticated();
      this.user$ = this.authService.getUser();
  }

  ngOnInit(){
    this.authenticated$ = this.authService.isAuthenticated();
    
    const token = localStorage.getItem("localUser")
    var obj = JSON.parse(token)

     this.buscaEmail.buscarEmailLoginConjunto(obj.email).subscribe((perfil) => {
        this.pessoa = perfil

        if(this.pessoa.perfil == "CLIENTE"){
          this.nome = this.pessoa.nomeCompleto;
        }
        if(this.pessoa.perfil == "SERVICO"){
          this.nome = this.pessoa.razaoSocial;
        }
    });
  }

  login(){
    this.router.navigate(['/login'])
  }

  checkProfile(){
    const perfil = this.authService.checkProfile();
  }

  cadastroCliente(){
    window.location.href = '/pessoa/fisica/cadastrar';
  }

  cadastroFornecedor(){
    window.location.href = '/pessoa/juridica/cadastrar';
  }

  logout(){
    this.authService.logout();
    window.location.href = '/home/home';
  }
}
