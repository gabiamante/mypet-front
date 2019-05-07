import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {PasswordModule} from 'primeng/password';
import { LoginGeralComponent } from './login-geral.component';
import { MenuCrudComponent } from './menu-crud/menu-crud.component';
import { LoginComponent } from './login/login.component';

@NgModule({

  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    PasswordModule
  ],

  declarations: [
    LoginGeralComponent,
    MenuCrudComponent,
    LoginComponent
  ],

  exports: [
    LoginGeralComponent,
    MenuCrudComponent,
    LoginComponent  
  ]
})
export class LoginGeralModule { }
