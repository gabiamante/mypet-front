import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PesquisarService } from '../pesquisar.service';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { projection } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cidade: string;
  estado: string;
  bairro: string;
  @Input() pj: PessoaJuridica[];
  @Input() pessoas: PessoaJuridica [];
  pessoa: PessoaJuridica;
  i: number;

  constructor(private router: Router, private pesquisarService: PesquisarService) {
    this.router = router;
  }

    ngOnInit() {

    }
    pesquisar(bairro, cidade, estado){
      this.pesquisarService.buscar()
      .subscribe(pj => this.pj = pj);
    }
}
