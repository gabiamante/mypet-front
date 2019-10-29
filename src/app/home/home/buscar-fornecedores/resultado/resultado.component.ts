import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { PesquisarService } from '../../../home.service';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { ActivatedRoute, Router, Route } from '@angular/router';

@Component({
  selector: 'app-resultado-fornecedor',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

constructor(){
  }

  ngOnInit() {
  }
}

