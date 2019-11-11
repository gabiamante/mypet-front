import { Component, OnInit, Input } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { BuscarFornecedoresComponent } from '../buscar-fornecedores.component';
import { PesquisarService } from 'src/app/home/home.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultado-fornecedor',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  @Input() forns: PessoaJuridica[];

  constructor(private service: PesquisarService,
    private router: Router) {
      this.router = router;
    }

  ngOnInit() {
    this.forns = this.service.forns;
  }

  pesquisarDetalhes(forn: PessoaJuridica){
    this.router.navigate(['home', 'detalhes', forn.id]);
  }
}

