import {PessoaJuridica} from '../../pessoa/pessoa-juridica';
import { PessoaService } from '../../pessoa/pessoa.service';
import { OnInit } from '@angular/core';

export class TableCrudAprovarPessssoa implements OnInit {

  displayDialog: boolean;

    pessoaJuridica: PessoaJuridica;

    pessoaJuridicaSelecionada: PessoaJuridica;

    novaPessoaJuridica: boolean;

    listaPessoaJuridica: PessoaJuridica[];

    cols: any[];

    constructor(private pessoaJuridicaService: PessoaService) {
     this.pessoaJuridica.razaoSocial = '' ;
     this.pessoaJuridica.cpfOuCnpj = '' ;
     this.pessoaJuridica.telefone1 = '' ;
     this.pessoaJuridica.telefone2 = '' ;
     this.pessoaJuridica.logradouro = '' ;
     this.pessoaJuridica.numero = 0 ;
     this.pessoaJuridica. tipoPerfil = 0;
     this.pessoaJuridica.complemento = '' ;
     this.pessoaJuridica.bairro = '' ;
     this.pessoaJuridica.cidade = '' ;
     this.pessoaJuridica.estado = '' ;
     this.pessoaJuridica.cep = '' ;
     this.pessoaJuridica.email = '' ;
     this.pessoaJuridica.senha = '' ;
     this.pessoaJuridica.fotoPerfil = '' ;
     this.pessoaJuridica.petShop = false;
     this.pessoaJuridica.farmacia = false;
     this.pessoaJuridica.banho = false;
     this.pessoaJuridica.tosa = false;
     this.pessoaJuridica.loja = false;
     this.pessoaJuridica.descricaoPetShop = '';
     this.pessoaJuridica.petVet = false;
     this.pessoaJuridica.vacinacao = false;
     this.pessoaJuridica.consulta = false;
     this.pessoaJuridica.exames = false;
     this.pessoaJuridica.descricaoPetVet = '';
     this.pessoaJuridica.petHome = false;
     this.pessoaJuridica.apartamento = false;
     this.pessoaJuridica.casa = false;
     this.pessoaJuridica.fumante = false;
     this.pessoaJuridica.telado = false;
     this.pessoaJuridica.descricaoPetHome = '';
    }

    ngOnInit() {
      this.pessoaJuridicaService.listPessoaJuridica().subscribe(listaPessoaJuridica => this.listaPessoaJuridica = listaPessoaJuridica);

      this.cols = [
          { field: 'razaoSocial', header: 'Razao Social' },
          { field: 'cpfOuCnpj', header: 'CNPJ' },
          { field: 'telefone1', header: 'Telefone1' },
          { field: 'telefone2', header: 'Telefone2' }
      ];
  }

  showDialogToAdd() {
      this.novaPessoaJuridica = true;
      this.pessoaJuridica;
      this.displayDialog = true;
  }

  save() {
      let listaPessoaJuridica = [...this.listaPessoaJuridica];
      if (this.novaPessoaJuridica)
      listaPessoaJuridica.push(this.pessoaJuridica);
      else
      listaPessoaJuridica[this.listaPessoaJuridica.indexOf(this.pessoaJuridicaSelecionada)] = this.pessoaJuridica;

      this.listaPessoaJuridica = listaPessoaJuridica;
      this.pessoaJuridica = null;
      this.displayDialog = false;
  }

  delete() {
      let index = this.listaPessoaJuridica.indexOf(this.pessoaJuridicaSelecionada);
      this.listaPessoaJuridica = this.listaPessoaJuridica.filter((val, i) => i != index);
      this.pessoaJuridica = null;
      this.displayDialog = false;
  }

  onRowSelect(event) {
      this.novaPessoaJuridica = false;
      this.pessoaJuridica = this.cloneCar(event.data);
      this.displayDialog = true;
  }


  cloneCar(c: PessoaJuridica): PessoaJuridica {
      let pessoaJuridica;
// tslint:disable-next-line: forin
      for (let prop in c) {
        pessoaJuridica[prop] = c[prop];
      }
      return pessoaJuridica;
  }


}
