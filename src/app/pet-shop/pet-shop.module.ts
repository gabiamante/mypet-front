import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraPetShopComponent } from './cadastra-pet-shop/cadastra-pet-shop.component';

@NgModule({

  imports: [
    CommonModule
  ],
  declarations: [CadastraPetShopComponent],
  exports: [CadastraPetShopComponent]
})
export class PetShopModule { }
