export class EventProvider {
  private id: number;
  private nomeEvento: string;
  private dataEvento: string;
  private nomeProvider: string;
  private nomeClient: string;

  constructor() {
    this.id = 0;
    this.nomeEvento = '';
    this.dataEvento = new Date().getDate() + '';
    this.nomeProvider = '';
    this.nomeClient = '';
  }
}
