import { Component, OnInit, Input } from '@angular/core';
import { PetHome } from '../../pet-home';
import { PetHomeService } from '../../pet-home.service';


@Component({
  selector: 'app-tabela-busca-pet-home',
  templateUrl: './tabela-busca-pet-home.component.html',
  styleUrls: ['./tabela-busca-pet-home.component.css']
})
export class TabelaBuscaPetHomeComponent implements OnInit {

  @Input() pethomes: PetHome[];
  cols: any[];

  constructor(private petHomeService: PetHomeService) {
               }

  ngOnInit() {

    this.listFromUser();

    this.cols = [
      {field: 'nomeCompleto', header: 'Nome Completo'},
      {field: 'email', header: 'E-mail'}
    ];
  }

  public listFromUser(){
    this.petHomeService.listFromUser().subscribe(pethomes => this.pethomes = pethomes);
  }
}
