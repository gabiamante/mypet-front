export class PessoaJuridica {
  public razaoSocial: string;
  public cnpj: string;
  public telefone1: string;
  public telefone2: string;
  public logradouro: string;
  public numero: number;
  public tipoPerfil: number;
  public complemento: string;
  public bairro: string;
  public cidade: string;
  public estado: string;
  public cep: string;
  public email: string;
  public senha: string;
  public fotoPerfil: string;

  public petShop:  boolean;
  public farmacia: boolean;
  public banho: boolean;
  public tosa: boolean;
  public loja: boolean;
  public descricaoPetShop: string;

  public petVet: boolean;
  public vacinacao: boolean;
  public consulta: boolean;
  public exames: boolean;
  public descricaoPetVet: string;

  public petHome: boolean;
  public apartamento: boolean;
  public casa: boolean;
  public fumante: boolean;
  public telado: boolean;
  public descricaoPetHome: string;




  constructor() {
     this.razaoSocial = '' ;
     this.cnpj = '' ;
     this.telefone1 = '' ;
     this.telefone2 = '' ;
     this.logradouro = '' ;
     this.numero = 0 ;
     this.tipoPerfil = 0;
     this.complemento = '' ;
     this.bairro = '' ;
     this.cidade = '' ;
     this.estado = '' ;
     this.cep = '' ;
     this.email = '' ;
     this.senha = '' ;
     this.fotoPerfil = '' ;
     this.petShop = false;
     this.farmacia = false;
     this.banho = false;
     this.tosa = false;
     this.loja = false;
     this.descricaoPetShop = '';
     this.petVet = false;
    this.vacinacao = false;
    this.consulta = false;
    this.exames = false;
    this.descricaoPetVet = '';
    this.petHome = false;
    this.apartamento = false;
    this.casa = false;
    this.fumante = false;
    this.telado = false;
    this.descricaoPetHome = '';
  }

}
