import { Component, OnInit } from '@angular/core';
import { PessoaJuridica } from '../../pessoa-juridica';
import { PessoaService } from '../../pessoa.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-cadastro-juridica',
  templateUrl: './cadastro-juridica.component.html',
  styleUrls: ['./cadastro-juridica.component.css']
})
export class CadastroJuridicaComponent implements OnInit {

  public pessoaJuridica: PessoaJuridica = new PessoaJuridica();

  constructor(private pessoaJuridicaService: PessoaService
  ,
              private router: Router) {
    this.router = router; }

  ngOnInit() {

    $(function () {
      $('#petShop').click(function () {
          if ($(this).is(':checked')) {
              $('#petShopFile').show();
              $('#farmacia').show();
              $('#banho').show();
              $('#tosa').show();
              $('#opcoesPetShop').show()
          } else {
              $('#petShopFile').hide();
              $('#farmacia').hide();
              $('#banho').hide();
              $('#tosa').hide();
              $('#opcoesPetShop').hide();

          }
      });
  });

  $(function () {
    $('#petVet').click(function () {
        if ($(this).is(':checked')) {
            $('#petVetFile').show();
            $('#vacinacao').show();
            $('#consulta').show();
            $('#exames').show();
            $('#descricaoPetVet').show();
            $('#opcoesPetVet').show();

        } else {
            $('#petVetFile').hide();
            $('#vacinacao').hide();
            $('#consulta').hide();
            $('#exames').hide();
            $('#descricaoPetVet').hide();
            $('#opcoesPetVet').hide();

        }
    });
});

$(function () {
  $('#petHome').click(function () {
      if ($(this).is(':checked')) {
          $('#petHomeFile').show();
          $('#apartamentoCasa').show();
          $('#fumante').show();
          $('#telado').show();
          $('#descricaoPetHome').show();
          $('#opcoesPetHomes').show();

      } else {
          $('#petHomeFile').hide();
          $('#apartamentoCasa').hide();
          $('#fumante').hide();
          $('#telado').hide();
          $('#descricaoPetHome').hide();
          $('#opcoesPetHome').hide();

      }
  });
});
}

  public salvar() {
    this.pessoaJuridicaService.salvarPessoaJuridica(this.pessoaJuridica).subscribe(
      response => {
        alert('Salvo com sucesso!');
        window.location.href = 'pessoaJuridica/inicial';
      }
    );
  }
  public voltar() {
    this.router.navigate(['administrador', 'menu-inicial-admin']);
}

}
