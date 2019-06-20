import { Component, OnInit, Input } from '@angular/core';
import { PesquisarService } from '../../home.service';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pesquisar-fornecedor',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  @Input() pessoas: PessoaJuridica[] = [];

  constructor(private pesquisarService: PesquisarService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

                this.router = router;
  }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.params.id;
    this.pesquisar();

  }

  public pesquisar(){
    this.pesquisarService.buscar()
    .subscribe(pessoas => this.pessoas = pessoas);
  }

  public pesquisarDetalhes(forn: PessoaJuridica){
    console.log(forn);
    this.router.navigate(['home', 'detalhes', forn.id]);
  }
}
