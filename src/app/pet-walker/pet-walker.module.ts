import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraPetWalkerComponent } from './cadastra-pet-walker/cadastra-pet-walker.component';

@NgModule({

  imports: [
    CommonModule
  ],
  declarations: [CadastraPetWalkerComponent],
  exports: [CadastraPetWalkerComponent]
})
export class PetWalkerModule { }
