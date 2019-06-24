import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { MenuInicialAdminComponent } from './administrador/menu-inicial-admin/menu-inicial-admin.component';
import { HomeComponent } from './home/home/home.component';
import { CadastroFisicaComponent } from './pessoa/pessoa-fisica/cadastro-fisica/cadastro-fisica.component';
import { CadastroJuridicaComponent } from './pessoa/pessoa-juridica/cadastro-juridica/cadastro-juridica.component';
import { FornecedoresComponent } from './home/fornecedores/fornecedores.component';
import { QuemSomosComponent } from './home/quem-somos/quem-somos.component';
import { DetalhesComponent } from './home/home/detalhes/detalhes.component';
import { AprovarPessoaComponent } from './aprovacao/aprovar-pessoa/aprovar-pessoa.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginAdminComponent } from './administrador/auth/login/login-admin.component';
import { DeletaPetClientComponent } from './administrador/menu-inicial-admin/deleta-pet-client/deleta-pet-client.component';

const routes: Routes = [
    { path: 'home/home', component: HomeComponent},
    { path: 'home/fornecedores', component: FornecedoresComponent},
    { path: 'home/quem-somos', component: QuemSomosComponent},
    { path: 'home/detalhes/:id', component: DetalhesComponent},

    { path: 'login', component: LoginComponent}, //login cliente e fornecedor
    { path: 'admin/login', component: LoginAdminComponent}, //login admin

    { path: 'aprovacao/pessoa', component: AprovarPessoaComponent},

    { path: 'pessoa/fisica/cadastrar', component: CadastroFisicaComponent},
    { path: 'pessoa/juridica/cadastrar', component: CadastroJuridicaComponent},

    { path: 'administrador/menu-inicial-admin', component: MenuInicialAdminComponent },
    { path: 'administrador/deleta-pet-client', component: DeletaPetClientComponent },
    { path: '', pathMatch: 'full', redirectTo: '/home/home'},
    { path: '**', component: NotFoundComponent }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
