import { Component, OnInit } from '@angular/core';
import { PessoaFisica } from '../../pessoa-fisica';
import { PessoaService } from '../../pessoa.service';
import { Router } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-cadastro-fisica',
  templateUrl: './cadastro-fisica.component.html',
  styleUrls: ['./cadastro-fisica.component.css']
})
export class CadastroFisicaComponent implements OnInit {

  public pessoaFisica: PessoaFisica = new PessoaFisica();

  constructor(private pessoaFisicaService: PessoaService
  ,
              private router: Router) {
    this.router = router; }

  ngOnInit() {


    $(function () {
      $('#petWalker').click(function () {
          if ($(this).is(':checked')) {
              $('#petWalkerFile').show();

          } else {
              $('#petWalkerFile').hide();

          }
      });
  });
  }

  public salvar() {
    this.pessoaFisicaService.salvarPessoaFisica(this.pessoaFisica).subscribe(
      response => {
        alert('Salvo com sucesso!');
        window.location.href = 'pessoaFisica/inicial';
      }
    );
  }
  public voltar() {
    this.router.navigate(['administrador', 'menu-inicial-admin']);
}

}
