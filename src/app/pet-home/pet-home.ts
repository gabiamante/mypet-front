export class PetHome {
    public id: number;
    public email: string;
    public password: string;
    public tipoPerfil: number;
    public nomeCompleto: string;
    public dataNascimento: string;
    public avaliacao: number;
    public cpfOuCnpj: string;
    public telefone1: string;
    public telefone2: string;
    public telefone3: string;
    public logradouro: string;
    public numero: string;
    public bairro: string;
    public cep: string;

    constructor() {
    this.id = 0;
    this.email = '';
    this.password = '';
    this.tipoPerfil = 0;
    this.nomeCompleto = '';
    this.dataNascimento = '';
    this.avaliacao = 0;
    this.cpfOuCnpj = '';
    this.telefone1 = '';
    this.telefone2 = '';
    this.logradouro = '';
    this.numero = '';
    this.bairro = '';
    this.cep = '';
    }
}
