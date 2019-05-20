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
  
  ngOnInit() { }
}
