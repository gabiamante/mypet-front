import { Component, OnInit } from '@angular/core';
import { PessoaJuridica } from '../../pessoa-juridica';
import { PessoaService } from '../../pessoa.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-cadastro-juridica',
  templateUrl: './cadastro-juridica.component.html',
  styleUrls: ['./cadastro-juridica.component.css']
})
export class CadastroJuridicaComponent implements OnInit {

  private formulario: FormGroup;
  public pessoaJuridica: PessoaJuridica = new PessoaJuridica();

  constructor(private pessoaJuridicaService: PessoaService,
              private router: Router,
              private formBuilder: FormBuilder) {

    this.router = router;
    this.formulario = this.formBuilder.group({
      razaoSocial: ['', Validators.required],
      email: ['', Validators.email]
  });
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

  logForm() {
    console.log(this.formulario.value);
    console.log(this.formulario.controls.email);

  }
}
