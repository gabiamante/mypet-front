import { Component, OnInit, Input } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  @Input() pessoas: PessoaJuridica[] = [];

  constructor(private pesquisarService: HomeService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const p = this.activatedRoute.snapshot.params.id;
    console.log('ngOnInit antes: ', p);

    this.pesquisarService.buscarDetalhes(p)
    .subscribe(pessoas => this.pessoas = pessoas);

    console.log('ngOnInit depois: ', this.pessoas);
  }
}
