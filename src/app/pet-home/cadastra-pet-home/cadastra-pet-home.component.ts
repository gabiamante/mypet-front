import { Component, OnInit } from '@angular/core';
import { PetHome } from '../pet-home';
import { PetHomeService } from '../pet-home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-pet-home',
  templateUrl: './cadastra-pet-home.component.html',
  styleUrls: ['./cadastra-pet-home.component.css']
})
export class CadastraPetHomeComponent implements OnInit {

  public pethome: PetHome = new PetHome();

  constructor(private petHomeService: PetHomeService,
              private router: Router) {
    this.router = router; }

  ngOnInit() {
  }
  public salvar() {
    this.petHomeService.salvar(this.pethome).subscribe(
      response => {
        alert('Salvo com sucesso!');
      }
    );
  }
  public voltar(){
    this.router.navigate(['administrador', 'menu-inicial-admin']);
  } 
}
