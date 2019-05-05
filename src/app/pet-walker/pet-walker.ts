export class PetWalker {

  public id: number;
  public nomeCompleto: string;
  public dataNascimento: string;
  public cpfOuCnpj: string;
  public email: string;
  public password: string;
  public avaliacao: number;
  public tipoPerfil: number;
  public logradouro: string;
  public numero: string;
  public bairro: string;
  public cep: string;

  constructor() {
    this.id = 0;
    this.nomeCompleto = '';
    this.dataNascimento = '';
    this.cpfOuCnpj = '';
    this.email = '';
    this.password = '';
    this.avaliacao = 0;
    this.tipoPerfil = 0;
    this.logradouro = '';
    this.numero = '';
    this.bairro = '';
    this.cep = '';
  }
}
