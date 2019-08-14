import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { ActivatedRoute} from '@angular/router';
import { PesquisarService } from '../../home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  /*
  @Input() pessoas: PessoaJuridica;
  private _pessoas: PessoaJuridica;
  */
 @Output() private pessoas: PessoaJuridica;

  constructor(private pesquisarService: PesquisarService,
              private activatedRoute: ActivatedRoute, ) {
               }

  ngOnInit() {
    const pessoa = this.activatedRoute.snapshot.params.id;

    //console.log('ng init detalhes: ' +  this.pesquisarService.buscarDetalhes(pessoa).subscribe(pessoas => this.pessoas = pessoas));
    //this.pesquisarService.abrirDetalhe(pessoa).subscribe(pessoas => this.pessoas = pessoas);
  }


}
