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

import { DeletaPetClientComponent } from './administrador/menu-inicial-admin/deleta-pet-client/deleta-pet-client.component';
import { DeletaPetProviderComponent } from './administrador/menu-inicial-admin/deleta-pet-provider/deleta-pet-provider.component';
import { BuscarPetProviderComponent } from './administrador/menu-inicial-admin/busca-pet-provider/busca-pet-provider.component';
import { BuscarPetClientComponent } from './administrador/menu-inicial-admin/busca-pet-client/busca-pet-client.component';
import { PesquisarComponent } from './home/home/pesquisar/pesquisar.component';
import { FullCalendarProviderScheduleComponent } from './full-calendar-provider-schedule/full-calendar-provider-schedule.component';
import { AlteraPetClientComponent } from './administrador/menu-inicial-admin/altera-pet-client/altera-pet-client.component';
import { AlteraPetProviderComponent } from './administrador/menu-inicial-admin/altera-pet-provider/altera-pet-provider.component';


const routes: Routes = [
    { path: 'home/home', component: HomeComponent},
    { path: 'home/fornecedores', component: FornecedoresComponent},
    { path: 'home/quem-somos', component: QuemSomosComponent},
    { path: 'home/detalhes/:id', component: DetalhesComponent},

    { path: 'login', component: LoginComponent}, //login cliente e fornecedor

    { path: 'aprovacao/pessoa', component: AprovarPessoaComponent},

    { path: 'pessoa/fisica/cadastrar', component: CadastroFisicaComponent},
    { path: 'pessoa/juridica/cadastrar', component: CadastroJuridicaComponent},

    { path: 'administrador/menu-inicial-admin', component: MenuInicialAdminComponent },
    { path: 'administrador/deletar-cliente', component: DeletaPetClientComponent },
    { path: 'administrador/deletar-fornecedor', component: DeletaPetProviderComponent },
    { path: 'administrador/buscar-fornecedor', component: BuscarPetProviderComponent },
    { path: 'administrador/buscar-cliente', component: BuscarPetClientComponent },
    { path: 'administrador/alterar-cliente/:id', component: AlteraPetClientComponent },
    { path: 'administrador/alterar-fornecedor/:id', component: AlteraPetProviderComponent },

    { path: 'fullcalendar/provider', component: FullCalendarProviderScheduleComponent },
    
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
