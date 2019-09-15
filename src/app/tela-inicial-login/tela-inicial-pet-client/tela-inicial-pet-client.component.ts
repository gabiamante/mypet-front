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
          label: 'PetProvider',
          items: [
              {label: 'Meu Perfil', icon: 'pi pi-fw pi-user'},
              {label: 'Minha agenda', icon: 'pi pi-fw pi-calendar'}
          ]
      }
    ];
  }

}
