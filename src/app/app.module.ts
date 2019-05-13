import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PetClientsModule } from './pet-clients/pet-clients.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { EscolhaPerfilModule } from './login-geral/escolha-perfil/escolha-perfil.module';
import { AcaoPerfilModule } from './login-geral/acao-perfil/acao-perfil.module';
import { LoginGeralModule } from './login-geral/login-geral.module';
import { AdministradorModule } from './administrador/administrador.module';
import { PetHomeModule } from './pet-home/pet-home.module';
import { PetShopModule } from './pet-shop/pet-shop.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PetClientsModule,
    PetHomeModule,
    PetShopModule,
    HomeModule,
    AppRoutingModule,
    ErrorsModule,
    EscolhaPerfilModule,
    AcaoPerfilModule,
    LoginGeralModule,
    AdministradorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
