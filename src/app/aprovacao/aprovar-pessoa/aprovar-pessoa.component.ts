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
    private pessoaJuridica: PessoaJuridica = {id: null, razaoSocial: '', cpf: '',
    telefoneFixo: '', telefoneCelular: '', logradouro: '', numero: 0, tipoPerfil: 0,
    complemento: '', bairro: '', cidade: '', estado: '', cep: '', email: '',
    senha: '', fotoPerfil: '', banhoETosa: '', consulta: '', tosaExotica: '',
    vacinacao: '', cirurgiaGeral: '',
    hidratacao: '', penteadosArtisticos: '', acupuntura: '', spa: '',
    hotel: '', creche: '', taxi: '',
    ensaioFotografico: '', adestramento: '', massagem: '', petwalk: '', situacaoAprovacao: '',
    checkStatus: false, active: true}){

  }

  ngOnInit() {
    this.pessoaJuridicaService.listPessoaJuridica().
    subscribe(listaPessoaJuridica => this.listaPessoaJuridica = listaPessoaJuridica);

    this.cols = [
        { field: 'razaoSocial', header: 'Razão Social' },
        { field: 'cpf', header: 'CNPJ' },
        { field: 'telefoneFixo', header: 'Telefone' },
        { field: 'telefoneCelular', header: 'Celular' },
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
    let i = 0;

    /*
    if (this.novaPessoaJuridica) {
      //alert('Entrou no if');
      listaPessoaJuridica.push(this.pessoaJuridica);
    } else {
      //alert('Entrou no else');
      listaPessoaJuridica[this.listaPessoaJuridica.indexOf(this.pessoaJuridicaSelecionada)] = this.pessoaJuridica;
    }
    */

    for (i = 0; i < listaPessoaJuridica.length; i++) {
        if (listaPessoaJuridica[i].situacaoAprovacao == 'Aprovado'
        || listaPessoaJuridica[i].situacaoAprovacao == 'Reprovado') {
          /*console.log('Atualizar tabela = ' +
          this.pessoaJuridicaService.atualizaPessoaJuridica(listaPessoaJuridica[i]));*/

          this.pessoaJuridicaService.atualizaPessoaJuridica(listaPessoaJuridica[i])
          .subscribe(response => {});
        }
    }

    //this.listaPessoaJuridica = listaPessoaJuridica;
    //this.pessoaJuridica = null;
    //this.displayDialog = false;
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
      id: null, razaoSocial: '', cpf: '', telefoneFixo: '', telefoneCelular: '',
      logradouro: '', numero: 0, tipoPerfil: 0, complemento: '', bairro: '',
      cidade: '', estado: '', cep: '', email: '', senha: '', fotoPerfil: '',
      banhoETosa: '', consulta: '', tosaExotica: '',
      vacinacao: '', cirurgiaGeral: '',
      hidratacao: '', penteadosArtisticos: '', acupuntura: '', spa: '',
      hotel: '', creche: '', taxi: '',
      ensaioFotografico: '', adestramento: '', massagem: '', petwalk: '', descricaoPetHome: '', 
      situacaoAprovacao: '', checkStatus: false, active: true};
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
  //console.log(this.pessoaJuridica);

  if (this.pessoaJuridica.situacaoAprovacao == null) {
    this.pessoaJuridica.situacaoAprovacao = 'Reprovado';
  }

  if (this.pessoaJuridica.situacaoAprovacao == '') {
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

