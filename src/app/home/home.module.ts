import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { FornecedoresComponent } from './fornecedores/fornecedores.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { PetHomeComponent } from './pesquisar/pet-home/pet-home.component';
import { PetShopComponent } from './pesquisar/pet-shop/pet-shop.component';
import { PetVetComponent } from './pesquisar/pet-vet/pet-vet.component';
import { PetWalkerComponent } from './pesquisar/pet-walker/pet-walker.component';

@NgModule({
  declarations: [
    HomeComponent,
    FornecedoresComponent,
    QuemSomosComponent,
    PetHomeComponent,
    PetShopComponent,
    PetVetComponent,
    PetWalkerComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports:[
    HomeComponent,
    FornecedoresComponent,
    QuemSomosComponent,
    PetHomeComponent,
    PetShopComponent,
    PetVetComponent,
    PetWalkerComponent
  ],
  bootstrap: [
    HomeComponent
  ]
})
export class HomeModule { }
