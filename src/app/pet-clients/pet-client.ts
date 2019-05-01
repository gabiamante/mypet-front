export class PetClient{
    public id:number;
    public email:string;
    public password:string;
    public tipoPerfil:number;
    public nomeCompleto:string;
    public dataNascimento:string;
    public avaliacao:number;
    public cpf:string;

    constructor(){
    this.id = 0
    this.email = ""
    this.password = ""
    this.tipoPerfil = 0
    this.nomeCompleto = ""
    this.dataNascimento = ""
    this.avaliacao = 0
    this.cpf = ""
    }
}
