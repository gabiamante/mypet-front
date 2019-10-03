import { Component, OnInit } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { ActivatedRoute, Router } from '@angular/router';
import { PesquisarService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filter: string = '';
  pessoas: PessoaJuridica[] = [];


  constructor(private pesquisarService: PesquisarService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.router = router;
  }

  ngOnInit() {
    //this.pessoas = this.activatedRoute.snapshot.data['pessoas'];
    this.pesquisarService.buscar().subscribe(pessoas => this.pessoas = pessoas);
  }

}
