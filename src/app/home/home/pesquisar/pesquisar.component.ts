import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { PesquisarService } from '../../home.service';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { ActivatedRoute, Router } from '@angular/router';


declare var $: any;


@Component({
  selector: 'app-pesquisar-fornecedor',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  @Input() pessoas: PessoaJuridica[];
  private _pessoas: PessoaJuridica[];

  private varPessoa: PessoaJuridica;

  private detalheCheck: boolean = false;

constructor(private pesquisarService: PesquisarService,
  private activatedRoute: ActivatedRoute,
  private router: Router,
  private route: ActivatedRoute) {
    this.router = router;
  }

  ngOnInit() {

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
