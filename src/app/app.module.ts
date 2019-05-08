import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PetClientsModule } from './pet-clients/pet-clients.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { EscolhaPerfilModule } from './login-geral/escolha-perfil/escolha-perfil.module';
import { AcaoPerfilModule } from './login-geral/acao-perfil/acao-perfil.module';
import { AtualizaPetClientModule } from './pet-clients/atualiza-pet-client/atualiza-pet-client.module';
import { LoginGeralModule } from './login-geral/login-geral.module';
import { AdministradorModule } from './administrador/administrador.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PetClientsModule,
    AppRoutingModule,
    ErrorsModule,
    EscolhaPerfilModule,
    AcaoPerfilModule,
    AtualizaPetClientModule,
    LoginGeralModule,
    AdministradorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
