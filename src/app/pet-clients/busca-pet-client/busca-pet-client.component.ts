import { Component, OnInit } from '@angular/core';
import { PetClientService } from '../pet-client.service';
import { PetClient } from '../pet-client';

@Component({
  selector: 'app-busca-pet-client',
  templateUrl: './busca-pet-client.component.html',
  styleUrls: ['./busca-pet-client.component.css']
})

export class BuscaPetClientComponent implements OnInit {

  filter: string = '';
  petclients: PetClient[] = [];
  petclient: PetClient;

  constructor(private petClientService: PetClientService) {

  }
  ngOnInit(): void {

    this.petClientService.listFromUser()
      .subscribe(petclients => this.petclients = petclients);

  }
}
