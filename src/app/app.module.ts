import { HistoricoPetproviderModule } from './historico-petprovider/historico-petprovider.module';
import { HistoricoPetclientModule } from './historico-petclient/historico-petclient.module';

import { ListaServiceContratadosProviderModule } from './lista-service-contratados-provider/lista-service-contratados-provider.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { AdministradorModule } from './administrador/administrador.module';
import { HomeModule } from './home/home.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { AprovaoPessoaModule } from './aprovacao/aprovar-pessoa/aprovao-pessoa/aprovao-pessoa.module';
import { FormsModule } from '@angular/forms';
import { CookieListComponent } from './auth/pages/cookie-list/cookie-list.component';
import { LoginComponent } from './auth/login/login.component';
import { FooterComponent } from './auth/layout/footer/footer.component';
import { HeaderComponent } from './auth/layout/header/header.component';

import { ErrorInterceptorProvider } from './auth/interceptors/error.interceptor';
import { AuthService } from './auth/auth.service';
import { StorageService } from './auth/storage.service';

import { AuthInterceptorProvider } from './auth/interceptors/auth-interceptor';
import { FullCalendarProviderScheduleModule } from './full-calendar-provider-schedule/full-calendar-provider-schedule.module';
import { RoleGuardService } from './auth/role-guard.service';
import { TelaInicialLoginModule } from './tela-inicial-login/tela-inicial-login.module';
import { CriacaoAgendaPetproviderModule } from './petservice/criacao-agenda-petprovider/criacao-agenda-petprovider.module';
import { TempoAtendimentoAgendaPetproviderModule } from './petservice/tempo-atendimento-agenda-petprovider/tempo-atendimento-agenda-petprovider.module';
import { ListaOpcoesHorariosServiceDisponiveisModule } from './lista-opcoes-horarios-service-disponiveis/lista-opcoes-horarios-service-disponiveis.module';
import { ListaServiceContratadosClientModule } from './lista-service-contratados-client/lista-service-contratados-client.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    CookieListComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    ErrorsModule,
    AdministradorModule,
    PessoaModule,
    FormsModule,
    AprovaoPessoaModule,
    FullCalendarProviderScheduleModule,
    TelaInicialLoginModule,
    CriacaoAgendaPetproviderModule,
    TempoAtendimentoAgendaPetproviderModule,
    ListaOpcoesHorariosServiceDisponiveisModule,
    ListaServiceContratadosProviderModule,
    ListaServiceContratadosClientModule,
    HistoricoPetclientModule,
    HistoricoPetproviderModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [AuthInterceptorProvider, ErrorInterceptorProvider,AuthService,
    StorageService, RoleGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
