import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { AdministradorModule } from './administrador/administrador.module';
import { HomeModule } from './home/home.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { AprovaoPessoaModule } from './aprovacao/aprovar-pessoa/aprovao-pessoa/aprovao-pessoa.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    ErrorsModule,
    AdministradorModule,
    PessoaModule,
    AprovaoPessoaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
