import { Component, OnInit, Input } from '@angular/core';
import { PetClient } from '../../pet-client';
import { PetClientService } from '../../pet-client.service';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-tabela-pet-clients',
  templateUrl: './tabela-pet-clients.component.html',
  styleUrls: ['./tabela-pet-clients.component.css']
})
export class TabelaPetClientsComponent implements OnInit {

  @Input() petclients: PetClient[] = [];
  @Input() cols: any[];

  constructor(private petClientService: PetClientService) { }

  ngOnInit() {

    this.listFromUser();

    this.cols = [
      {field: 'nomeCompleto', header: 'Nome Completo'}
    ];
  }

  public listFromUser(){
    this.petClientService.listFromUser().subscribe(petclients => this.petclients = petclients);
  }

  public deletar(id: string) {
        this.petClientService.delete(id).subscribe(
          r => {
            this.listFromUser()
          }
        )
    }
}
