import { Component, OnInit } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pessoas: PessoaJuridica[] = [];
  pessoa: PessoaJuridica;
  filter: string;

  constructor() {
  }

  ngOnInit() {
      this.filter = '';
  }

}
