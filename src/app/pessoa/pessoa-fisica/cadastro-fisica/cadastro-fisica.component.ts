import { Component, OnInit } from '@angular/core';
import { PessoaFisica } from '../../pessoa-fisica';
import { PessoaService } from '../../pessoa.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-fisica',
  templateUrl: './cadastro-fisica.component.html',
  styleUrls: ['./cadastro-fisica.component.css']
})
export class CadastroFisicaComponent implements OnInit, ErrorStateMatcher {

  public pessoaFisica: PessoaFisica = new PessoaFisica();

  formRegister: FormGroup

  constructor(
    private pessoaFisicaService: PessoaService,
    private fb: FormBuilder,
    private router: Router) {

      this.formRegister = this.fb.group({
        'nomeCompleto': ['', [Validators.required]],
        'cpf': ['', [Validators.required]],
        'dataNascimento': ['', [Validators.required]],
        'email': ['', [Validators.required, Validators.email]],
        'senha': ['', [Validators.required]],
        'senha2': ['', [Validators.required]],
        'logradouro': ['', [Validators.required]],
        'numero': ['', [Validators.required]],
        'complemento': [''],
        'bairro': ['', [Validators.required]],
        'cidade': ['', [Validators.required]],
        'estado': ['', [Validators.required]],
        'cep': ['', [Validators.required]],
        'telefoneFixo': ['', [Validators.required]],
        'telefoneCelular': ['', [Validators.required]]
      })

      this.router = router;
    }

  ngOnInit() {}

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  public salvar() {
    this.pessoaFisica.active = true;
    this.pessoaFisicaService.salvarPessoaFisica(this.pessoaFisica).subscribe(
      response => {
        Swal.fire(
          'Cadastro efetuado com sucesso!',
          'Você pode logar agora com o e-mail: ' + this.pessoaFisica.email,
          'success'
        )
        window.location.href = '/home/home';
      }
    );
  }
  public voltar() {
    this.router.navigate(['home', 'home']);
}

  matchingPasswords(group: FormGroup){
    if (group){
      const pass1 = group.controls['senha'].value;
      const pass2 = group.controls['senha2'].value;

      if(pass1 == pass2){
        return null
      }
    }
    return {matching: false};
  }
}
