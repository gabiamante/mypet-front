import {  OnInit, Component, Input } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { LazyLoadEvent } from 'primeng/api';


declare var $: any;

@Component({
  selector: 'app-aprovar-pessoa',
  templateUrl: './aprovar-pessoa.component.html',
  styleUrls: ['./aprovar-pessoa.component.css'],
  styles: [`

    `]
})
export class AprovarPessoaComponent implements OnInit {


  displayDialog: boolean;

  statusPessoaJuridica: boolean;

 // @Input() pessoaJuridica: PessoaJuridica;

  pessoaJuridicaSelecionada: PessoaJuridica;

  novaPessoaJuridica: boolean;

  listaPessoaJuridica: PessoaJuridica[];

  datasource: PessoaJuridica[];

  cols: any[];

  aprovacaoChecked: boolean;

  expandedRowIndex: number;

  conteudoLinha: string;



  constructor(private pessoaJuridicaService: PessoaService,
    private pessoaJuridica: PessoaJuridica = {id: null, razaoSocial: '', cnpj: '',
    telefone1: '', telefone2: '', logradouro: '', numero: 0, tipoPerfil: 0,
    complemento: '', bairro: '', cidade: '', estado: '', cep: '', email: '',
    senha: '', fotoPerfil: '', petShop: false, farmacia: false, banho: false,
    tosa: false, loja: false,
    descricaoPetShop: '', petVet: false, vacinacao: false, consulta: false,
    exames: false, descricaoPetVet: '', petHome: false, apartamento: false,
    casa: false, fumante: false, telado: false, descricaoPetHome: '', situacaoAprovacao: '',
    checkStatus: false}) {

  }

  ngOnInit() {
    this.pessoaJuridicaService.listPessoaJuridica().
    subscribe(listaPessoaJuridica => this.listaPessoaJuridica = listaPessoaJuridica);

    this.cols = [
        { field: 'razaoSocial', header: 'Razão Social' },
        { field: 'cnpj', header: 'CNPJ' },
        { field: 'telefone1', header: 'Telefone' },
        { field: 'telefone2', header: 'Celular' },
        { field: 'situacaoAprovacao', header: 'Situação' }
    ];

}

showDialogToAdd() {
    this.novaPessoaJuridica = true;
    alert(this.novaPessoaJuridica);
    this.pessoaJuridica;
    this.displayDialog = true;
    //alert('this.aprovacaoChecked ' + this.aprovacaoChecked);
}

save() {
    let listaPessoaJuridica = [...this.listaPessoaJuridica];

    if (this.novaPessoaJuridica) {
      //alert('Entrou no if');
      listaPessoaJuridica.push(this.pessoaJuridica);
    } else {
      //alert('Entrou no else');
      listaPessoaJuridica[this.listaPessoaJuridica.indexOf(this.pessoaJuridicaSelecionada)] = this.pessoaJuridica;
    }

    this.listaPessoaJuridica = listaPessoaJuridica;
    //this.pessoaJuridica = null;
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


  let varPessoaJuridica = new function () {
    this[this.pessoaJuridica] = {
      id: null, razaoSocial: '', cnpj: '', telefone1: '', telefone2: '',
  logradouro: '', numero: 0, tipoPerfil: 0, complemento: '', bairro: '',
  cidade: '', estado: '', cep: '', email: '', senha: '', fotoPerfil: '',
  petShop: false, farmacia: false, banho: false, tosa: false, loja: false,
  descricaoPetShop: '', petVet: false, vacinacao: false, consulta: false,
  exames: false, descricaoPetVet: '', petHome: false, apartamento: false,
  casa: false, fumante: false, telado: false, descricaoPetHome: '', situacaoAprovacao: '',
  checkStatus: false};
  };
// tslint:disable-next-line: forin
    for (const prop in c) {
      varPessoaJuridica[prop] = c[prop];
    }
    return varPessoaJuridica;
}

//Método que retorna a linha selecionada
expand(i) {
  this.expandedRowIndex = i;
  console.log(this.expandedRowIndex);
  return this.expandedRowIndex;
}

changeData(rowData) {
  this.pessoaJuridica = rowData;
  console.log(this.pessoaJuridica);

  if (this.pessoaJuridica.situacaoAprovacao == null) {
    this.pessoaJuridica.situacaoAprovacao = 'Reprovado';
  }

  else if (this.pessoaJuridica.situacaoAprovacao == 'Reprovado') {
    this.pessoaJuridica.situacaoAprovacao = 'Aprovado';
  }
  else if (this.pessoaJuridica.situacaoAprovacao == 'Aprovado') {
    this.pessoaJuridica.situacaoAprovacao = 'Reprovado';
  }
    return  this.pessoaJuridica;

}



}