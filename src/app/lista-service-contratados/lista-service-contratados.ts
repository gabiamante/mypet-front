export class ServiceContratados  {
  id: number;
  nomeCliente = '';
  nomeProvider = '';
  dataEscolhida = new Date();
  tempoInicio = '';
  tempoFim = '';
  tipoService = '';
  siglaDia = '';
  idPetClient = '';
  idPetProvider = '';
  dataCalendarioCorrecao = '';
  status = false;
  cancelado = false;
  notificaCancelamento = false;
  motivoCancelamento = '';
  mostraStatus = '';


  constructor() {
    this.id = 0;
    this.nomeCliente = '';
    this.nomeProvider = '';
    this.tempoInicio = '';
    this.dataEscolhida = null;
    this.tempoFim = '';
    this.tipoService = '';
    this.siglaDia = '';
    this.idPetClient = '';
    this.idPetProvider = '';
    this.dataCalendarioCorrecao = '';
    this.status = false;
    this.cancelado = false;
    this.notificaCancelamento = false;
    this.motivoCancelamento =  '';
    this.mostraStatus = '';
  }
}
