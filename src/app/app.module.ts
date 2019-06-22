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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtTokenInterceptor } from './auth/interceptors/jwt.token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CookieListComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    ErrorsModule,
    AdministradorModule,
    PessoaModule,
    FormsModule,
    AprovaoPessoaModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
