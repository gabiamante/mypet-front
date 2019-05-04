import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { PetClientsModule } from 'src/app/pet-clients/pet-clients.module';
import {PasswordModule} from 'primeng/password';

@NgModule({

  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    PasswordModule
  ],

  declarations: [
    LoginComponent
  ],

  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
