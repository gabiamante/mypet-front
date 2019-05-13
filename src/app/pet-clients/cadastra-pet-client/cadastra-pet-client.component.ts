import { Component, OnInit } from '@angular/core';
import { PetClientService } from '../pet-client.service';
import { PetClient } from 'src/app/pet-clients/pet-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-pet-client',
  templateUrl: './cadastra-pet-client.component.html',
  styleUrls: ['./cadastra-pet-client.component.css']
})
export class CadastraPetClientComponent implements OnInit {

  public petclient: PetClient = new PetClient();

  constructor(private petClientService: PetClientService,
              private router: Router) {
    this.router = router; }

  ngOnInit() {
  }

    public salvar() {
      this.petClientService.salvar(this.petclient).subscribe(
        response => {
          alert('Salvo com sucesso!');
        }
      );
    }
    public voltar(){
      this.router.navigate(['administrador', 'menu-inicial-admin']);
  }
}
