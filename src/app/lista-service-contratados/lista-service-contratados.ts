export class ServiceContratados  {
  id: number;
  nomeCliente = '';
  nomeProvider = '';
  dataEscolhida = new Date();
  tempoInicio = '';
  tempoFim = '';
  tipoService = '';
  siglaDia = '';

  constructor() {
    this.id = 0;
    this.nomeCliente = '';
    this.nomeProvider = '';
    this.tempoInicio = '';
    this.dataEscolhida = null;
    this.tempoFim = '';
    this.tipoService = '';
    this.siglaDia = '';
  }
}
