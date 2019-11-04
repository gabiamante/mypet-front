import { Component, OnInit, Input } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { BuscarFornecedoresComponent } from '../buscar-fornecedores.component';
import { PesquisarService } from 'src/app/home/home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resultado-fornecedor',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  @Input() forns: PessoaJuridica[];

  constructor(private service: PesquisarService){
    }

  ngOnInit() {
    this.forns = this.service.forns;
  }
}

