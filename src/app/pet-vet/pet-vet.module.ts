import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { CadastraPetVetComponent } from './cadastra-pet-vet/cadastra-pet-vet.component';

@NgModule({

  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    InputMaskModule
  ],

  declarations: [

  CadastraPetVetComponent
  ],

  exports: [
  CadastraPetVetComponent
  ]
})
export class PetVetModule { }
