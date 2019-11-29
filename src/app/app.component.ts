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
  @Input() perfil: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    public buscaEmail: PessoaService) {
    this.authenticated$ = this.authService.isAuthenticated();
    this.user$ = this.authService.getUser();
  }

  ngOnInit() {
    this.authenticated$ = this.authService.isAuthenticated();

    const token = localStorage.getItem("localUser")
    var obj = JSON.parse(token)

    this.buscaEmail.buscarEmailLoginConjunto(obj.email).subscribe((perfil) => {
      this.pessoa = perfil

      if (this.pessoa.perfil == "CLIENTE") {
        this.nome = this.pessoa.nomeCompleto;
        this.perfil = "CLIENTE";
      }
      if (this.pessoa.perfil == "SERVICO") {
        this.nome = this.pessoa.razaoSocial;
        this.perfil = "SERVICO";
      }
    });
  }

  home() {
    window.location.href = '/home/home';
  }

  login() {
    this.router.navigate(['/login'])
  }

  checkProfile() {
    const perfil = this.authService.checkProfile();
  }

  cadastroCliente() {
    window.location.href = '/pessoa/fisica/cadastrar';
  }

  cadastroFornecedor() {
    window.location.href = '/pessoa/juridica/cadastrar';
  }

  logout() {
    this.authService.logout();
    window.location.href = '/home/home';
  }

  meuPerfilProvider() {
    window.location.href = 'pet-provider/meu-perfil';
  }

  publicarAgendaProvider() {
    window.location.href = 'agendar/criacao-petprovider';
  }

  minhaAgendaProvider() {
    window.location.href = 'contratados/petprovider';
  }

  historicoPetProvider() {
    window.location.href = 'historico/petprovider'
  }

  meuPerfilCliente() {
    window.location.href = 'pet-client/meu-perfil';
  }

  minhaAgendaCliente() {
    window.location.href = 'contratados/petclient';
  }

  historicoCliente() {
    window.location.href = 'historico/petclient';
  }

  meusPets() {
    window.location.href = 'pets';
  }

}
