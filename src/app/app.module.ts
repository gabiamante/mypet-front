import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PetClientsModule } from './pet-clients/pet-clients.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { LoginModule } from './login-geral/login/login.module';
import { EscolhaPerfilModule } from './login-geral/escolha-perfil/escolha-perfil.module';
import { AcaoPerfilModule } from './login-geral/acao-perfil/acao-perfil.module';
import { AtualizaPetClientModule } from './pet-clients/atualiza-pet-client/atualiza-pet-client.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PetClientsModule,
    AppRoutingModule,
    ErrorsModule,
    LoginModule,
    EscolhaPerfilModule,
    AcaoPerfilModule,
    AtualizaPetClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
