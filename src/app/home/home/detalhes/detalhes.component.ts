import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
<<<<<<< HEAD
import { ActivatedRoute, Router } from '@angular/router';
=======
import { ActivatedRoute} from '@angular/router';
>>>>>>> aceacb31603c73de40a8f5aacb8609e4989e4db9
import { PesquisarService } from '../../home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

<<<<<<< HEAD
  pessoa: PessoaJuridica;

  constructor(private pesquisarService: PesquisarService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { 
                this.router = router;
              }
=======
  /*
  @Input() pessoas: PessoaJuridica;
  private _pessoas: PessoaJuridica;
  */
 @Output() private pessoas: PessoaJuridica;

  constructor(private pesquisarService: PesquisarService,
              private activatedRoute: ActivatedRoute, ) {
               }
>>>>>>> aceacb31603c73de40a8f5aacb8609e4989e4db9

  ngOnInit() {
    const pessoa = this.activatedRoute.snapshot.params.id;
<<<<<<< HEAD
    this.pesquisarService.buscarDetalhes(pessoa).subscribe(retorno => this.pessoa = retorno);
  }

  agendar(){
    this.router.navigate(['login']);
  }
  voltar(){
    this.router.navigate(['home', 'home']);
=======

    //console.log('ng init detalhes: ' +  this.pesquisarService.buscarDetalhes(pessoa).subscribe(pessoas => this.pessoas = pessoas));
    //this.pesquisarService.abrirDetalhe(pessoa).subscribe(pessoas => this.pessoas = pessoas);
>>>>>>> aceacb31603c73de40a8f5aacb8609e4989e4db9
  }


}
