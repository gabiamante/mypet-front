import { Component, OnInit, Input } from '@angular/core';
import { PetClient } from '../../pet-client';
import { PetClientService } from '../../pet-client.service';

@Component({
  selector: 'app-tabela-busca-pet-clients',
  templateUrl: './tabela-busca-pet-clients.component.html',
  styleUrls: ['./tabela-busca-pet-clients.component.css']
})
export class TabelaBuscaPetClientsComponent implements OnInit {

  @Input() petclients: PetClient[];
  cols: any[];

  constructor(private petClientService: PetClientService) {
               }

  ngOnInit() {

    this.listFromUser();

    this.cols = [
      {field: 'nomeCompleto', header: 'Nome Completo'},
      {field: 'email', header: 'E-mail'}
    ];
  }

  public listFromUser(){
    this.petClientService.listFromUser().subscribe(petclients => this.petclients = petclients);
  }
}
