import { Component, OnInit } from '@angular/core';
import { PetEventService } from './pet-event.service';
import { PetEvent } from './pet-event';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pet-event',
  templateUrl: './pet-event.component.html',
  styleUrls: ['./pet-event.component.css']
})
export class PetEventComponent implements OnInit {

  displayedColumns: string[] = ['nomeEvento', 'localEvento', 'startEvento', 'endEvento', 'descriptionEvento'];
  public varPessoa;
  public varEvent: PetEvent = new PetEvent;
  public listaEvents: PetEvent[] = [];
  id: number;

  constructor(
    private serveciEvent: PetEventService) { }

  ngOnInit() {

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);

    this.serveciEvent.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPessoa = retorno;
      this.id = this.varPessoa.id
    });
  }

  salvarPetEvent(varEvent: PetEvent){
    if(this.varPessoa.perfil == "CLIENTE"){
      this.varEvent.nomeCliente = this.varPessoa.nomeCompleto;
      this.varEvent.idCliente = this.varPessoa.id;
    }
    else{
      this.varEvent.nomeProvider = this.varPessoa.razaoSocial;
      this.varEvent.idProvider= this.varPessoa.id;
    }

    this.serveciEvent.salvarEvento(varEvent).subscribe( res => {
      Swal.fire(
        'Evento publicado',
        'Seu evento foi publicado com sucesso!'
      )
    });

  }

}
