import { Component, OnInit, Input } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { PesquisarService } from '../../home.service';

@Component({
  selector: 'app-buscar-fornecedores',
  templateUrl: './buscar-fornecedores.component.html',
  styleUrls: ['./buscar-fornecedores.component.css']
})
export class BuscarFornecedoresComponent implements OnInit {

  servicos: ServicosSelecionados[] = [];
  servicoSelecionado: ServicosSelecionados;
  public forn: PessoaJuridica = new PessoaJuridica();
  forns: PessoaJuridica[] = [];

  constructor(
    private homeService: PesquisarService) {

    this.servicos = [
      {name: 'Selecione o serviço desejado', label: 'Selecionar'},
      {name: 'Banho/Tosa', label: 'banhoETosa'},
      {name: 'Consulta', label: 'consulta'},
      {name: 'Tosa Exótica', label: 'tosaExotica'},
      {name: 'Vacinação', label: 'vacinacao'},
      {name: 'Cirurgia Geral', label: 'cirurgiaGeral'},
      {name: 'Hidratação', label: 'hidratacao'},
      {name: 'Penteados Artísticos', label: 'penteadosArtisticos'},
      {name: 'Acupuntura', label: 'acupuntura'},
      {name: 'SPA', label: 'spa'},
      {name: 'Hotel', label: 'hotel'},
      {name: 'Creche', label: 'creche'},
      {name: 'Táxi', label: 'taxi'},
      {name: 'Ensaio Fotográfico', label: 'ensaioFotografico'},
      {name: 'Adestramento', label: 'adestramento'},
      {name: 'Massagem', label: 'massagem'},
      {name: 'Pet Walk', label: 'petwalk'}
    ];
   }

  ngOnInit() {
  }
  

  pesquisarFornecedor(){
    if(this.servicoSelecionado.label == "banhoETosa")  {
      this.forn.banhoETosa = "banhoETosa"
    }else{
      this.forn.banhoETosa = null
    }

    if(this.servicoSelecionado.label == "consulta")  {
      this.forn.consulta = "consulta"
    }else{
      this.forn.consulta = null
    }

    if(this.servicoSelecionado.label == "tosaExotica")  {
      this.forn.tosaExotica = "tosaExotica"
    }else{
      this.forn.tosaExotica = null
    }

    if(this.servicoSelecionado.label == "vacinacao")  {
      this.forn.vacinacao = "vacinacao"
    }else{
      this.forn.vacinacao = null
    }

    if(this.servicoSelecionado.label == "cirurgiaGeral")  {
      this.forn.cirurgiaGeral = "cirurgiaGeral"
    }else{
      this.forn.cirurgiaGeral = null
    }

    if(this.servicoSelecionado.label == "hidratacao")  {
      this.forn.hidratacao = "hidratacao"
    }else{
      this.forn.hidratacao = null
    }

    if(this.servicoSelecionado.label == "penteadosArtisticos")  {
      this.forn.penteadosArtisticos = "penteadosArtisticos"
    }else{
      this.forn.penteadosArtisticos = null
    }

    if(this.servicoSelecionado.label == "acupuntura")  {
      this.forn.acupuntura = "acupuntura"
    }else{
      this.forn.acupuntura = null
    }

    if(this.servicoSelecionado.label == "spa")  {
      this.forn.spa = "spa"
    }else{
      this.forn.spa = null
    }

    if(this.servicoSelecionado.label == "hotel")  {
      this.forn.hotel = "hotel"
    }else{
      this.forn.hotel = null
    }

    if(this.servicoSelecionado.label == "creche")  {
      this.forn.creche = "creche"
    }else{
      this.forn.creche = null
    }

    if(this.servicoSelecionado.label == "taxi")  {
      this.forn.taxi = "taxi"
    }else{
      this.forn.taxi = null
    }

    if(this.servicoSelecionado.label == "ensaioFotografico")  {
      this.forn.ensaioFotografico = "ensaioFotografico"
    }else{
      this.forn.ensaioFotografico = null
    }

    if(this.servicoSelecionado.label == "adestramento")  {
      this.forn.adestramento = "adestramento"
    }else{
      this.forn.adestramento = null
    }

    if(this.servicoSelecionado.label == "massagem")  {
      this.forn.massagem = "massagem"
    }else{
      this.forn.massagem = null
    }

    if(this.servicoSelecionado.label == "petwalk")  {
      this.forn.petwalk = "petwalk"
    }else{
      this.forn.petwalk = null
    }

  this.homeService.buscarPetProvidersPorFiltro(this.forn).subscribe(pessoas => {
    this.forns = pessoas
  });
  }
}
