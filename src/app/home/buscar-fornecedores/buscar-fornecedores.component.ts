import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { Fornecedor } from './busca-fornecedor';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';

@Component({
  selector: 'app-buscar-fornecedores',
  templateUrl: './buscar-fornecedores.component.html',
  styleUrls: ['./buscar-fornecedores.component.css']
})
export class BuscarFornecedoresComponent implements OnInit {

  servicos: ServicosSelecionados[];
  servicoSelecionado: ServicosSelecionados;
  public forn: PessoaJuridica = new PessoaJuridica();

  constructor() {
    this.servicos = [
      {label: 'Escolha o serviço desejado', name: null},
      {label: 'banhoETosa', name: 'Banho/Tosa'},
      {label: 'consulta', name: 'Consulta'},
      {label: 'tosaExotica', name: 'Tosa Exótica'},
      {label: 'vacinacao', name: 'Vacinação'},
      {label: 'cirurgiaGeral', name: 'Cirurgia Geral'},
      {label: 'hidratacao', name: 'Hidratação'},
      {label: 'penteadosArtisticos', name: 'Penteados Artísticos'},
      {label: 'acupuntura', name: 'Acupuntura'},
      {label: 'spa', name: 'SPA'},
      {label: 'hotel', name: 'Hotel'},
      {label: 'creche', name: 'Creche'},
      {label: 'taxi', name: 'Táxi'},
      {label: 'ensaioFotografico', name: 'Ensaio Fotográfico'},
      {label: 'adestramento', name: 'Adestramento'},
      {label: 'massagem', name: 'Massagem'},
      {label: 'petwalk', name: 'Pet Walk'}
    ];
   }

  ngOnInit() {
  }

  pesquisarFornecedor(){
    //this.forn.servico = this.servicoSelecionado;
    alert("Fornecedor: " + this.forn.cidade);
  }
}
