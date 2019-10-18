import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { CriacaoAgendaProvider } from './criacao-agenda-petprovider';
import Swal from 'sweetalert2';
import { CriacaoAgendaPetproviderService } from './criacao-agenda-petprovider.service';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';

@Component({
  selector: 'app-criacao-agenda-petprovider',
  templateUrl: './criacao-agenda-petprovider.component.html',
  styleUrls: ['./criacao-agenda-petprovider.component.css']
})
export class CriacaoAgendaPetproviderComponent implements OnInit {

  listaDeServicos: string[] = [];
  servicoSelecionado: string;
  lstServicosSelecionados: ServicosSelecionados[] = [];
  varServicosSelecionados: ServicosSelecionados;
  clicks = 0;
  varCriacaoAgendaProvider: CriacaoAgendaProvider = new CriacaoAgendaProvider();
  lstCriacaoAgendaProvider: CriacaoAgendaProvider[] = [];
  @Input() lstCriacaoAgendaProviderAgendadoNaoContratados: CriacaoAgendaProvider[] = [];
  varPetProvider: PessoaJuridica = new PessoaJuridica();
  diasSemana = [];
  varCriacaoAgendaProviderToAttachCopy;
  checkOpSegunda = false;
  qtdDiasSemanaSelecionados = 0;
  qtdDiasSemanaSelecionadosCopy = 0;
  timeValue: string;
  br: any;
  invalidDates: Array<Date>;
  verificacaoDataEscolhida: any;

  constructor(private criacaoAgendaService: CriacaoAgendaPetproviderService) {
    this.lstServicosSelecionados =
    [
      {label: 'Banho/Tosa', name: 'Banho/Tosa'},
      {label: 'Walking/Andar', name: 'Walking/Andar'}
    ];
   }

  ngOnInit() {
    let today = new Date();
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
    // alert(today);
    this.br = {
      firstDayOfWeek: 1,
      dayNames: [ 'domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado' ],
      dayNamesShort: [ 'dom', 'seg', 'ter', 'quar', 'quin', 'sex', 'sáb' ],
      dayNamesMin: [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
      monthNames: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
      'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
      monthNamesShort: [ 'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'sep', 'out',
      'nov', 'dez' ],
      today: 'Hoje',
      clear: 'Limpar'
  };

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);

    this.criacaoAgendaService.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
    this.varPetProvider = retorno;
    this.listAgendaProviderFiltrarNaoContratados(this.varPetProvider);
    });

  }


  count() {
      this.clicks++;
  }

  addToList(varCriacaoAgendaProviderToAttach: CriacaoAgendaProvider) {
    this.diasSemana.push(varCriacaoAgendaProviderToAttach.segundaCheck);
    this.diasSemana.push(varCriacaoAgendaProviderToAttach.tercaCheck);
    this.diasSemana.push(varCriacaoAgendaProviderToAttach.quartaCheck);
    this.diasSemana.push(varCriacaoAgendaProviderToAttach.quintaCheck);
    this.diasSemana.push(varCriacaoAgendaProviderToAttach.sextaCheck);
    this.diasSemana.push(varCriacaoAgendaProviderToAttach.sabadoCheck);
    this.diasSemana.push(varCriacaoAgendaProviderToAttach.domingoCheck);
    this.diasSemana.forEach(element => {
      if (element === true)  {
        this.qtdDiasSemanaSelecionados++;
      }
    });
    if (varCriacaoAgendaProviderToAttach.tempoInicio > varCriacaoAgendaProviderToAttach.tempoFim)  {
      Swal.fire({
        type: 'error',
        title: 'Inconsistência com o tempo',
        text: 'O tempo de início não pode ser menor que o fim',
        footer: ''
      });
    } else if (varCriacaoAgendaProviderToAttach.segundaCheck === false && varCriacaoAgendaProviderToAttach.tercaCheck === false &&
      varCriacaoAgendaProviderToAttach.quartaCheck === false && varCriacaoAgendaProviderToAttach.quintaCheck === false &&
      varCriacaoAgendaProviderToAttach.sextaCheck === false && varCriacaoAgendaProviderToAttach.sabadoCheck === false &&
      varCriacaoAgendaProviderToAttach.domingoCheck === false) {
      Swal.fire({
        type: 'error',
        title: 'Nenhum dia de semana foi incluído',
        text: 'Escolha pelos um dia da semana',
        footer: ''
      });

    } else if (this.varCriacaoAgendaProvider.tempoInicio === null ||
    this.varCriacaoAgendaProvider.tempoFim === null ) {
      Swal.fire({
        type: 'error',
        title: 'Tempo não pode ser vazio',
        text: 'Escolha horário para as atividades',
        footer: ''
      });
    } else {
      this.correcaoTempo(varCriacaoAgendaProviderToAttach);
      this.correcaoDia(varCriacaoAgendaProviderToAttach);
      this.adicionaServico(varCriacaoAgendaProviderToAttach, this.varServicosSelecionados);
      this.varCriacaoAgendaProviderToAttachCopy = Object.assign({}, varCriacaoAgendaProviderToAttach);
      this.adicionaSiglaDias(this.varCriacaoAgendaProviderToAttachCopy);
      this.lstCriacaoAgendaProvider.push(this.varCriacaoAgendaProviderToAttachCopy);
      this.qtdDiasSemanaSelecionadosCopy = this.qtdDiasSemanaSelecionados;
      this.reiniciaDias(varCriacaoAgendaProviderToAttach);
    }
  }

  adicionaSiglaDias(varCriacaoAgendaProviderToAttach: CriacaoAgendaProvider) {
    if (varCriacaoAgendaProviderToAttach.segundaCheck === true)  {
      varCriacaoAgendaProviderToAttach.siglaDia = varCriacaoAgendaProviderToAttach.siglaDia
        .concat(' ' + varCriacaoAgendaProviderToAttach.siglaDia + 'Seg');
    }
    if (varCriacaoAgendaProviderToAttach.tercaCheck === true)  {
      varCriacaoAgendaProviderToAttach.siglaDia = varCriacaoAgendaProviderToAttach.siglaDia
      .concat(' ' + varCriacaoAgendaProviderToAttach.siglaDia + 'Ter');
    }
    if (varCriacaoAgendaProviderToAttach.quartaCheck === true)  {
      varCriacaoAgendaProviderToAttach.siglaDia = varCriacaoAgendaProviderToAttach.siglaDia
      .concat(' ' + varCriacaoAgendaProviderToAttach.siglaDia + 'Quar');
    }
    if (varCriacaoAgendaProviderToAttach.quintaCheck === true)  {
      varCriacaoAgendaProviderToAttach.siglaDia = varCriacaoAgendaProviderToAttach.siglaDia
      .concat(' ' + varCriacaoAgendaProviderToAttach.siglaDia + 'Quin');
    }
    if (varCriacaoAgendaProviderToAttach.sextaCheck === true)  {
      varCriacaoAgendaProviderToAttach.siglaDia = varCriacaoAgendaProviderToAttach.siglaDia
      .concat(' ' + varCriacaoAgendaProviderToAttach.siglaDia + 'Sex');
    }
    if (varCriacaoAgendaProviderToAttach.sabadoCheck === true)  {
      varCriacaoAgendaProviderToAttach.siglaDia = varCriacaoAgendaProviderToAttach.siglaDia
      .concat(' ' + varCriacaoAgendaProviderToAttach.siglaDia + 'Sab');
    }
    if (varCriacaoAgendaProviderToAttach.domingoCheck === true)  {
      varCriacaoAgendaProviderToAttach.siglaDia = varCriacaoAgendaProviderToAttach.siglaDia
      .concat(' ' + varCriacaoAgendaProviderToAttach.siglaDia + 'Dom');
    }
    const siglasCorrecao = varCriacaoAgendaProviderToAttach.siglaDia.split(' ');
    let maiorSigla = '';
    for (let i = 0; i < siglasCorrecao.length; i ++) {
      if (maiorSigla.length < siglasCorrecao[i].length)  {
        maiorSigla = siglasCorrecao[i];
      }
    }

    // maiorSigla = maiorSigla.replace('Seg', '-Seg');
    // maiorSigla = maiorSigla.replace('Ter', '-Ter');
    // maiorSigla = maiorSigla.replace('Quar', '-Quar');
    // maiorSigla = maiorSigla.replace('Quin', '-Quin');
    // maiorSigla = maiorSigla.replace('Sex', '-Sex');
    // maiorSigla = maiorSigla.replace('Sab', '-Sab');
    // maiorSigla = maiorSigla.replace('Dom', '-Dom');

    varCriacaoAgendaProviderToAttach.siglaDia = maiorSigla;
  }

  reiniciaDias(varCriacaoAgendaProviderToAttach: CriacaoAgendaProvider)  {
      varCriacaoAgendaProviderToAttach.segundaCheck = false;
      varCriacaoAgendaProviderToAttach.tercaCheck = false;
      varCriacaoAgendaProviderToAttach.quartaCheck = false;
      varCriacaoAgendaProviderToAttach.quintaCheck = false;
      varCriacaoAgendaProviderToAttach.sextaCheck = false;
      varCriacaoAgendaProviderToAttach.sabadoCheck = false;
      varCriacaoAgendaProviderToAttach.domingoCheck = false;
      varCriacaoAgendaProviderToAttach.siglaDia = '';
      const today = new Date();
      const time = today.getHours() + ':' + today.getMinutes();
      varCriacaoAgendaProviderToAttach.tempoInicioCorrecao = time;
      varCriacaoAgendaProviderToAttach.tempoFimCorrecao = time;
      this.qtdDiasSemanaSelecionadosCopy = 0;
  }

  correcaoTempo(varCriacaoAgendaProviderToAttach: CriacaoAgendaProvider) {
    varCriacaoAgendaProviderToAttach.tempoInicioCorrecao = varCriacaoAgendaProviderToAttach.tempoInicio.getHours() + ':' +
    varCriacaoAgendaProviderToAttach.tempoInicio.getMinutes();
    varCriacaoAgendaProviderToAttach.tempoFimCorrecao = varCriacaoAgendaProviderToAttach.tempoFim.getHours() + ':' +
    varCriacaoAgendaProviderToAttach.tempoFim.getMinutes();
  }

  correcaoDia(varCriacaoAgendaProviderToAttach: CriacaoAgendaProvider) {

    varCriacaoAgendaProviderToAttach.dataCalendarioCorrecao = varCriacaoAgendaProviderToAttach.dataCalendario.getDate()
    + '/' + (varCriacaoAgendaProviderToAttach.dataCalendario.getMonth()+1) + '/'
    + varCriacaoAgendaProviderToAttach.dataCalendario.getFullYear();
  }



  salvarAgendaProviderTeste(varCriacaoAgendaProviderToAttach: CriacaoAgendaProvider) {
    varCriacaoAgendaProviderToAttach = this.varCriacaoAgendaProviderToAttachCopy;

    //  COMEÇO DO INTERVALO
    varCriacaoAgendaProviderToAttach.tempoInicioIntervalo =
    parseInt((varCriacaoAgendaProviderToAttach.tempoInicio.getTime() / (1000 * 60)).toFixed(1), 10);

    varCriacaoAgendaProviderToAttach.tempoFimIntervalo =
    parseInt((varCriacaoAgendaProviderToAttach.tempoFim.getTime() / (1000 * 60)).toFixed(1), 10);
    // alert('date1: ' + varCriacaoAgendaProviderToAttach.tempoInicioIntervalo);
    // alert('date2: ' + varCriacaoAgendaProviderToAttach.tempoFimIntervalo);
    //  FIM DO INTERVALO

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);

    this.criacaoAgendaService.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
    this.varPetProvider = retorno;

    this.criacaoAgendaService.verificaAgendaProvider(this.varPetProvider, varCriacaoAgendaProviderToAttach).
    subscribe((res) => {
      var retornoAux: CriacaoAgendaProvider = new CriacaoAgendaProvider();
      retornoAux = res;
      // alert(JSON.stringify(retornoAux));
      if  ((retornoAux + '').length === 0)  {
        // alert('não encontrou, pode inserir');
        this.criacaoAgendaService.salvarCriacaoAgendaProviderTeste(varCriacaoAgendaProviderToAttach).subscribe(
          response => {
            this.lstCriacaoAgendaProvider = [];
          }
          );
          Swal.fire({
            position: 'center',
            type: 'success',
            title: 'Horário cadastrado !',
            showConfirmButton: false,
            timer: 1500
          });
        } else{
          Swal.fire({
            position: 'center',
            type: 'error',
            title: 'Oops...',
            text: 'Já existe um horáio cadastrado',
            footer: 'Você não pode cadastrar um mesmo serviço no mesmo horário e no mesmo dia !',
            showConfirmButton: false,
            timer: 1500
          });
        }
    });

  });
  setTimeout(function() {
    // alert('segura');
    location.reload();
  }, 3000);
    // location.reload();
  }

  adicionaServico(varCriacaoAgendaProviderToAttach: CriacaoAgendaProvider, varServicosSelecionados: ServicosSelecionados) {
    varCriacaoAgendaProviderToAttach.servicoEscolhido = varServicosSelecionados.name;
  }

  getDataCalendario (varCriacaoAgendaProviderToAttach: CriacaoAgendaProvider) {
    return varCriacaoAgendaProviderToAttach.dataCalendario;
  }

  listAgendaProviderFiltrarNaoContratados(varPetProvider: PessoaJuridica) {
    this.criacaoAgendaService.listAgendaProviderFiltrarNaoContratados(varPetProvider.id + '').
    subscribe(res => this.lstCriacaoAgendaProviderAgendadoNaoContratados = res);
  }

  verificaAgendaProvider(varPetProvider: PessoaJuridica, varCriacaoAgendaProviderToAttach: CriacaoAgendaProvider):
  CriacaoAgendaProvider {
    varCriacaoAgendaProviderToAttach = this.varCriacaoAgendaProviderToAttachCopy;
    var auxCriacaoAgenda: CriacaoAgendaProvider = new CriacaoAgendaProvider();
    this.criacaoAgendaService.verificaAgendaProvider(varPetProvider, varCriacaoAgendaProviderToAttach).
    subscribe((res) => {
      auxCriacaoAgenda = res;
    });
    return auxCriacaoAgenda;
  }

}
