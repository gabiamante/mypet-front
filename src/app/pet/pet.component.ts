import { PessoaFisica } from './../pessoa/pessoa-fisica';
import { PetService } from './pet.service';
import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {


  displayedColumns: string[] = ['nomePet', 'racaPet', 'especiePet', 'alterarPet', 'excluirPet'];
  public varPet: Pet = new Pet;
  public varPessoaFisica: PessoaFisica = new PessoaFisica;
  listaPets: Pet[] = [];
  aux: Pet[] = [];
  public petAlterar: Pet = new Pet;

  constructor(private varPetService: PetService) { }

  ngOnInit() {

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);

    this.varPetService.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPessoaFisica = retorno;
    });

    setTimeout(() => {
      this.varPetService.buscarPets(this.varPessoaFisica.id).subscribe((retorno) => {
        this.listaPets = retorno;
        /* for(const element of this.aux){
          if(element.active != false){
            this.listaPets.push(element)
          }
        } */
      })
    }, 500);
  }

  salvarPet(varPet: Pet) {

    varPet.idPetcliente = this.varPessoaFisica.id;
    this.varPetService.salvarPet(varPet).subscribe(
      response => {
        Swal.fire(
          'Pet cadastrado',
          'Seu Pet foi cadastrado com sucesso!'
        )
        location.reload();
      }
    );
  }

  excluirPet(varPet: Pet) {
    varPet.active = false;
    this.varPetService.excluirPet(varPet).subscribe(res => {
      Swal.fire(
        'Pet inativado',
        'Seu Pet foi inativado com sucesso!'
      )
      location.reload();
    })
  }

  alterarPet(varPet: Pet){
    alert(JSON.stringify(varPet))
    /* this.varPetService.alterarPet(varPet).subscribe(res => {
      Swal.fire(
        'Pet alterado',
        'Seu Pet foi alterado com sucesso!'
      )
      location.reload();
    }) */
  }

  setAlterar(petAlterar: Pet){
    this.petAlterar = petAlterar;
  }

}
