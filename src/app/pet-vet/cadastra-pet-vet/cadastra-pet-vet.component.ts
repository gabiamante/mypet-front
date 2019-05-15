import { Component, OnInit } from '@angular/core';
import { PetVetService } from '../pet-vet.service';
import { Router } from '@angular/router';
import { PetVet } from '../pet-vet';

@Component({
  selector: 'app-cadastra-pet-vet',
  templateUrl: './cadastra-pet-vet.component.html',
  styleUrls: ['./cadastra-pet-vet.component.css']
})
export class CadastraPetVetComponent implements OnInit {

  public petvet: PetVet = new PetVet();

  constructor(private petVetService: PetVetService,
              private router: Router) {
    this.router = router; }

  ngOnInit() {
  }

  public salvar() {
    this.petVetService.salvar(this.petvet).subscribe(
      response => {
        alert('Salvo com sucesso!');
      }
    );
  }
  public voltar() {
    this.router.navigate(['administrador', 'menu-inicial-admin']);
}

}
