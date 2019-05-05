export class PetShop {

  public id: number;
  public nomeRazaoSocial: string;
  public cnpj: string;
  public tipoPerfil: number;
  public email: string;
  public password: string;
  public avaliacao: number;
  public logradouro: string;
  public numero: string;
  public bairro: string;
  public cep: string;

  constructor() {
    this.id = 0;
    this.nomeRazaoSocial = '';
    this.cnpj = '';
    this.tipoPerfil = 0;
    this.email = '';
    this.password = '';
    this.avaliacao = 0;
    this.logradouro = '';
    this.numero = '';
    this.bairro = '';
    this.cep = '';
  }
}
