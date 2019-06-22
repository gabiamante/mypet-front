import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../../home.service';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pesquisar-fornecedor',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  @Input() pessoas: PessoaJuridica[] = [];

  constructor(private pesquisarService: HomeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

                this.router = router;
  }

  ngOnInit() {

    this.pesquisar();

  }

  public pesquisar(){
    this.pesquisarService.buscar()
    .subscribe(pessoas => this.pessoas = pessoas);
  }

  public pesquisarDetalhes(forn: PessoaJuridica){
    this.router.navigate(['home', 'detalhes', forn.id]);
  }
}
