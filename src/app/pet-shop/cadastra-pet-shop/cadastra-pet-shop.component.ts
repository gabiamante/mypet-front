import { Component, OnInit } from '@angular/core';
import { PetShopService } from '../pet-shop.service';
import { PetShop } from 'src/app/pet-shop/pet-shop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastra-pet-shop',
  templateUrl: './cadastra-pet-shop.component.html',
  styleUrls: ['./cadastra-pet-shop.component.css']
})
export class CadastraPetShopComponent implements OnInit {

  public petshop: PetShop = new PetShop();

  constructor(private petShopService: PetShopService,
              private router: Router) {
    this.router = router; }

  ngOnInit() {
  }

    public salvar() {
      this.petShopService.salvar(this.petshop).subscribe(
        response => {
          alert('Salvo com sucesso!');
        }
      );
    }
    public voltar() {
      this.router.navigate(['administrador', 'menu-inicial-admin']);
  }
}
