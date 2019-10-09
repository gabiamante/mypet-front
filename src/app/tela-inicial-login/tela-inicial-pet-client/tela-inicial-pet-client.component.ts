import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tela-inicial-pet-client',
  templateUrl: './tela-inicial-pet-client.component.html',
  styleUrls: ['./tela-inicial-pet-client.component.css']
})
export class TelaInicialPetClientComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
      this.items = [{
          label: 'PetClient',
          items: [
              {label: 'Meu Perfil', icon: 'pi pi-fw pi-user', url: 'login/tela-inicial-pet-client/meu-perfil'},
              {label: 'Minha agenda', icon: 'pi pi-fw pi-calendar', url: 'contratados/petclient'},
              {label: 'Histórico', icon: 'pi pi-fw pi-calendar', url: 'historico/petclient'}
          ]
      }
    ];
  }

}
