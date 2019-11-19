import { PessoaFisica } from './../pessoa/pessoa-fisica';
import { PetService } from './pet.service';
import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  public varPet: Pet = new Pet;
  public varPessoaFisica: PessoaFisica = new PessoaFisica;

  constructor(private varPetService: PetService) { }

  ngOnInit() {

  }

  salvarPet(varPet: Pet) {
    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);

    this.varPetService.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPessoaFisica = retorno;

      varPet.idPetcliente = this.varPessoaFisica.id;
      this.varPetService.salvarPet(varPet).subscribe(
        response => {
          location.reload();
        }
      );

    });


  }

}
