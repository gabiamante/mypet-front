export class PessoaFisica {
  public id: number;
  public nomeCompleto: string;
  public dataNascimento: string;
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
  public cpf: string;
  public email: string;
  public senha: string;
  public fotoPerfil: string;
  /* Para PetWalker */
  public petWalker: boolean;
  public descricao: string;
  public fotos: string;


  constructor() {
      this.id = 0;
     this.nomeCompleto = '' ;
     this.dataNascimento = '' ;
     this.telefone1 = '' ;
     this.telefone2 = '' ;
     this.logradouro = '' ;
     this.numero = 0 ;
     this.tipoPerfil = 0 ;
     this.complemento = '' ;
     this.bairro = '' ;
     this.cidade = '' ;
     this.estado = '' ;
     this.cep = '' ;
     this.cpf = '' ;
     this.email = '' ;
     this.senha = '' ;
     this.fotoPerfil = '' ;
    /* Para PetWalker */
    this.descricao = '' ;
    this.fotos = '' ;
  }

}
