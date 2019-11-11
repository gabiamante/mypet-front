    
import { Component, OnInit, Input } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { ActivatedRoute, Router } from '@angular/router';
import { PesquisarService } from '../../home.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  pessoa: PessoaJuridica;
  @Input() media: number = 0;

  constructor(private pesquisarService: PesquisarService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { 
                this.router = router;
              }

  ngOnInit() {
    const pessoa = this.activatedRoute.snapshot.params.id;
    this.pesquisarService.buscarDetalhes(pessoa).subscribe(retorno => {
      this.pessoa = retorno
      console.log(JSON.stringify(this.pessoa))
     
    });
  }

  agendar(forn: PessoaJuridica){
    console.log(forn);
    this.router.navigate(['agendamento-pet-service', 'agendamento-pet-service', forn.id]);
  }
  voltar(){
    this.router.navigate(['home', 'home']);
  }
}