import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputMaskModule, ButtonModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';

import { CadastraPetShopComponent } from './cadastra-pet-shop/cadastra-pet-shop.component';

@NgModule({

  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    InputMaskModule,
    TableModule,
    ButtonModule
  ],
  declarations: [
    CadastraPetShopComponent
  ],
  exports: [
    CadastraPetShopComponent
  ]
})
export class PetShopModule { }
