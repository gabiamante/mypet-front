import { Component, OnInit, Input } from '@angular/core';
import { PesquisarService } from '../../pesquisar.service';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  @Input() pj: PessoaJuridica[];
  

  constructor(private pesquisarService: PesquisarService) { }

  ngOnInit() {

    this.pesquisar();

  }

  pesquisar(){
    this.pesquisarService.buscar()
    .subscribe(pj => this.pj = pj);
  }
}
