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
              {label: 'Meu Perfil', icon: 'pi pi-fw pi-user', url: 'home/home'},
              {label: 'Publicar Agenda', icon: 'pi pi-fw pi-calendar-plus', url: 'agendar/criacao-petprovider'},
              {label: 'Minha Agenda', icon: 'pi pi-fw pi-calendar-plus', url: 'contratados/petprovider'},
              {label: 'Histórico', icon: 'pi pi-fw pi-globe', url: 'historico/petprovider'},
              {label: 'Publicar Anúncio', icon: 'pi pi-fw pi-globe'}
            ]
        }
      ];
    }

}
