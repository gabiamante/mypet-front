import { Component, OnInit } from '@angular/core';
import { PessoaJuridica } from '../../pessoa-juridica';
import { PessoaService } from '../../pessoa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-juridica',
  templateUrl: './cadastro-juridica.component.html',
  styleUrls: ['./cadastro-juridica.component.css']
})
export class CadastroJuridicaComponent implements OnInit {

  public pessoaJuridica: PessoaJuridica = new PessoaJuridica();

  constructor(private pessoaJuridicaService: PessoaService,
              private router: Router) {

    this.router = router;
}

  ngOnInit() {

  }

  public salvar() {
    this.pessoaJuridicaService.salvarPessoaJuridica(this.pessoaJuridica).subscribe(
      response => {
        alert('Salvo com sucesso!');
        window.location.href = 'home/home';
      }
    );
  }

  public voltar() {
    this.router.navigate(['administrador', 'menu-inicial-admin']);
  }
}
