import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { PesquisarService } from '../../home.service';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { ActivatedRoute, Router, Route } from '@angular/router';


declare var $: any;


@Component({
  selector: 'app-resultado-fornecedor',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  @Input() pessoas: PessoaJuridica[];
  private _pessoas: PessoaJuridica[];

  private varPessoa: PessoaJuridica;

  private detalheCheck: boolean = false;
  pessoa: PessoaJuridica;


constructor(
    private pesquisarService: PesquisarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private route: Route) { 
      this.router = router;
  }

  ngOnInit() {

    //this.activatedRoute.snapshot.queryParamMap.get('forns');
    const pessoa = this.activatedRoute.snapshot.params.id;
    this.pesquisarService.buscarDetalhes(pessoa).subscribe(retorno => this.pessoa = retorno);

    $(function () {
      $('#detalheCheck').click(function () {
          if ($(this).is(':checked')) {
              $('#descricaoDetalhe').show();
          } else {
              $('#descricaoDetalhe').hide();
          }
      });
  });

  }

  public pesquisar() {
    this.pesquisarService.buscar().subscribe(pessoas => this.pessoas = pessoas);
  }

  public pesquisarDetalhes(forn: PessoaJuridica) {
    this.router.navigate(['home', 'detalhes', forn.id]);
  }

  public abrirDetalhe(pessoa: PessoaJuridica) {

    this.pesquisarService.abrirDetalhe(pessoa).subscribe(pessoa => this.varPessoa = pessoa);

  }
}

