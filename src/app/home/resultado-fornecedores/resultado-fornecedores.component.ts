import { Component, OnInit, Input } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado-fornecedores',
  templateUrl: './resultado-fornecedores.component.html',
  styleUrls: ['./resultado-fornecedores.component.css']
})
export class ResultadoFornecedoresComponent implements OnInit {

  @Input() listapj: PessoaJuridica[];

  constructor(
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
  }

}
