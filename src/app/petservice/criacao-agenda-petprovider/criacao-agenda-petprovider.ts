export class CriacaoAgendaProvider {
  id: number;
  segundaCheck = false;
  tercaCheck = false;
  quartaCheck = false;
  quintaCheck = false;
  sextaCheck = false;
  sabadoCheck = false;
  domingoCheck = false;
  tempoInicio = new Date();
  tempoFim = new Date();
  siglaDia = '';
  tempoInicioCorrecao = '';
  tempoFimCorrecao = '';
  today = new Date();
  time = '';
  selecaoHorario = false;
  nomeCliente = '';
  nomeProvider = '';
  servicoEscolhido = '';
  idPetClient = '';
  idPetProvider = '';
  dataCalendario = new Date();
  dataCalendarioCorrecao = '';

  constructor() {
    this.time = this.today.getHours() + ':' + this.today.getMinutes();
    this.id = 0;
    this.segundaCheck = false;
    this.tercaCheck = false;
    this.quartaCheck = false;
    this.quintaCheck = false;
    this.sextaCheck = false;
    this.sabadoCheck = false;
    this.domingoCheck = false;
    this.tempoInicio = null;
    this.tempoFim = null;
    this.tempoInicioCorrecao = this.time;
    this.tempoFimCorrecao = this.time;
    this.siglaDia =  '';
    this.selecaoHorario = false;
    this.nomeCliente = '';
    this.nomeProvider = '';
    this.servicoEscolhido = '';
    this.idPetClient = '';
    this.idPetProvider = '';
    this.dataCalendario = null;
    this.dataCalendarioCorrecao = '';
  }
}
