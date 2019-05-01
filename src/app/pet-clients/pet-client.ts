export class PetClient {
    public id: number;
    public email: string;
    public password: string;
    public tipoPerfil: number;
    public nomeCompleto: string;
    public dataNascimento: string;
    public avaliacao: number;
    public cpf: string;
    public telefone1: string;
    public telefone2: string;
    public logradouro: string;
    public numero: string;
    public complemento: string;
    public cep: string;

    constructor() {
    this.id = 0;
    this.email = '';
    this.password = '';
    this.tipoPerfil = 0;
    this.nomeCompleto = '';
    this.dataNascimento = '';
    this.avaliacao = 0;
    this.cpf = '';
    this.telefone1 = '';
    this.telefone2 = '';
    this.logradouro = '';
    this.numero = '';
    this.complemento = '';
    this.cep = '';
    }
}
