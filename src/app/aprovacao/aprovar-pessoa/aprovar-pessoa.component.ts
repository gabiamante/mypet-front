import { OnInit, Component, Input } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { LazyLoadEvent } from 'primeng/api';
import Swal from 'sweetalert2';


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
  pessoaJuridicaSelecionada: PessoaJuridica;
  novaPessoaJuridica: boolean;
  @Input() listaPessoaJuridica: PessoaJuridica[] = [];
  datasource: PessoaJuridica[];
  cols: any[];
  aprovacaoChecked: boolean;
  expandedRowIndex: number;
  conteudoLinha: string;

  constructor(private pessoaJuridicaService: PessoaService,
    private pessoaJuridica: PessoaJuridica = {
      id: null, razaoSocial: '', cpf: '',
      telefoneFixo: '', telefoneCelular: '', logradouro: '', numero: 0, tipoPerfil: 0,
      complemento: '', bairro: '', cidade: '', estado: '', cep: '', email: '',
      senha: '', fotoPerfil: '', descricaoPetProvider: '', banhoETosa: '', consulta: '', tosaExotica: '',
      vacinacao: '', cirurgiaGeral: '',
      hidratacao: '', penteadosArtisticos: '', acupuntura: '', spa: '',
      hotel: '', creche: '', taxi: '',
      ensaioFotografico: '', adestramento: '', massagem: '', petwalk: '', exames: '', situacaoAprovacao: '',
      checkStatus: false, active: true, mediaAvaliacao: 0.0
    }) {

  }

  ngOnInit() {
    this.pessoaJuridicaService.listPessoaJuridica().
      subscribe(listaPessoaJuridica => {
       this.listaPessoaJuridica = listaPessoaJuridica
      });
  }

  aprovar(cliente: PessoaJuridica) {
    Swal.fire({
      title: 'Aprovação',
      text: "Deseja aprovar esse prestador?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        cliente.situacaoAprovacao = "Aprovado"
        this.pessoaJuridicaService.atualizaPessoaJuridica(cliente).subscribe(
          response => {
            Swal.fire({
              title: 'Prestador Aprovado',
              text: "Agora este prestador pode entrar com o e-mail cadastrado.",
              type: 'success'
            })
            location.reload();
          });
      }
      else {

      }
    })
  }

  reprovar(cliente: PessoaJuridica) {
    Swal.fire({
      title: 'Reprovação',
      text: "Deseja reprovar esse prestador?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {
        cliente.situacaoAprovacao = "Reprovado"
        this.pessoaJuridicaService.atualizaPessoaJuridica(cliente).subscribe(
          response => {
            Swal.fire({
              title: 'Prestador Reprovado',
              text: "",
              type: 'success'
            })
            location.reload();
          });
      }
      else {

      }
    })
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
          .subscribe(response => { });
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
        descricaoPetProvider: '', banhoETosa: '', consulta: '', tosaExotica: '',
        vacinacao: '', cirurgiaGeral: '',
        hidratacao: '', penteadosArtisticos: '', acupuntura: '', spa: '',
        hotel: '', creche: '', taxi: '',
        ensaioFotografico: '', adestramento: '', massagem: '', petwalk: '', exames: '', descricaoPetHome: '',
        situacaoAprovacao: '', checkStatus: false, active: true
      };
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
    return this.pessoaJuridica;

  }

}

