import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tela-inicial-pet-provider',
  templateUrl: './tela-inicial-pet-provider.component.html',
  styleUrls: ['./tela-inicial-pet-provider.component.css']
})
export class TelaInicialPetProviderComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

    ngOnInit() {
        this.items = [{
            label: 'PetProvider',
            items: [
                {label: 'Meu Perfil', icon: 'pi pi-fw pi-user', url: ''},
                {label: 'Minha Agenda', icon: 'pi pi-fw pi-calendar-plus', url: 'agenda/criacao-petprovider'},
                {label: 'Meu Anúncio', icon: 'pi pi-fw pi-globe'},
                {label: 'Publicar Agenda', icon: 'pi pi-fw pi-calendar-plus'},
                {label: 'Publicar Anúncio', icon: 'pi pi-fw pi-globe'}
            ]
        }
      ];
    }

}
