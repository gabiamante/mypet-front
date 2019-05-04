import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-acao-perfil',
  templateUrl: './acao-perfil.component.html',
  styleUrls: ['./acao-perfil.component.css']
})
export class AcaoPerfilComponent implements OnInit {

  constructor() { }

  items: MenuItem[];

  ngOnInit() {
    this.items = [{
      label: 'Solicitar Serviço',
      items: [
          {label: 'Andar com pet', icon: 'pi pi-fw pi-map-marker'},
          {label: 'Levar ao veterinário', icon: 'pi pi-fw pi-briefcase'},
          {label: 'Levar ao petshop', icon: 'pi pi-fw pi-shopping-cart'},
          {label: 'Hospedagem para seu pet', icon: 'pi pi-fw pi-home'}
      ]
  },
  {
      label: 'Prover serviço',
      items: [
          {label: 'Quero ser um petwalker', icon: 'pi pi-fw pi-map-marker'},
          {label: 'Quero cadastrar minha clínica veterinária, petvet', icon: 'pi pi-fw pi-briefcase'},
          {label: 'Quero cadastrar meu petshop', icon: 'pi pi-fw pi-shopping-cart'},
          {label: 'Quero disponibilizar minha hospedagem, petjhome', icon: 'pi pi-fw pi-home'}
      ]
  }];
  }

}
