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
import { FullCalendarProviderScheduleComponent } from './full-calendar-provider-schedule/full-calendar-provider-schedule.component';
import { AlteraPetClientComponent } from './administrador/menu-inicial-admin/altera-pet-client/altera-pet-client.component';
import { AlteraPetProviderComponent } from './administrador/menu-inicial-admin/altera-pet-provider/altera-pet-provider.component';
import { RoleGuardService as RoleGuard } from './auth/role-guard.service';
import { TelaInicialPetProviderComponent } from './tela-inicial-login/tela-inicial-pet-provider/tela-inicial-pet-provider.component';
import { TelaInicialPetClientComponent } from './tela-inicial-login/tela-inicial-pet-client/tela-inicial-pet-client.component';
import { CriacaoAgendaPetproviderComponent } from './petservice/criacao-agenda-petprovider/criacao-agenda-petprovider.component';
import { TempoAtendimentoAgendaPetproviderComponent } from './petservice/tempo-atendimento-agenda-petprovider/tempo-atendimento-agenda-petprovider.component';
import { ListaOpcoesHorariosServiceDisponiveisComponent } from './lista-opcoes-horarios-service-disponiveis/lista-opcoes-horarios-service-disponiveis.component';
import { PerfilPetClientComponent } from './tela-inicial-login/tela-inicial-pet-client/perfil-pet-client/perfil-pet-client.component';
import { PerfilPetProviderComponent } from './tela-inicial-login/tela-inicial-pet-provider/perfil-pet-provider/perfil-pet-provider.component';
import { BuscarFornecedoresComponent } from './home/buscar-fornecedores/buscar-fornecedores.component';


const routes: Routes = [
    { path: 'home/home', component: HomeComponent},
    { path: 'home/fornecedores', component: FornecedoresComponent},
    { path: 'home/quem-somos', component: QuemSomosComponent},
    { path: 'home/detalhes/:id', component: DetalhesComponent},
    
    { path: 'teste', component: BuscarFornecedoresComponent },

    { path: 'login', component: LoginComponent},

    { path: 'aprovacao/pessoa', component: AprovarPessoaComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'}},

    { path: 'pessoa/fisica/cadastrar', component: CadastroFisicaComponent},
    { path: 'pessoa/juridica/cadastrar', component: CadastroJuridicaComponent},

    { path: 'administrador/menu-inicial-admin', component: MenuInicialAdminComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'}},
    { path: 'administrador/deletar-cliente', component: DeletaPetClientComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'}},
    { path: 'administrador/deletar-fornecedor', component: DeletaPetProviderComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'}},
    { path: 'administrador/buscar-fornecedor', component: BuscarPetProviderComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'}},
    { path: 'administrador/buscar-cliente', component: BuscarPetClientComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'}},
    { path: 'administrador/alterar-cliente/:id', component: AlteraPetClientComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'}},
    { path: 'administrador/alterar-fornecedor/:id', component: AlteraPetProviderComponent, canActivate: [RoleGuard], data: {expectedRole: 'ADMIN'}},

    { path: 'fullcalendar/provider', component: FullCalendarProviderScheduleComponent },

    { path: 'login/tela-inicial-pet-client', component: TelaInicialPetClientComponent, canActivate: [RoleGuard], data: {expectedRole: 'CLIENTE'}},
    { path: 'login/tela-inicial-pet-client/meu-perfil', component: PerfilPetClientComponent, canActivate: [RoleGuard], data: {expectedRole: 'CLIENTE'}},

    { path: 'login/tela-inicial-pet-provider', component: TelaInicialPetProviderComponent, canActivate: [RoleGuard], data: {expectedRole: 'SERVICO'}},
    { path: 'login/tela-inicial-pet-provider/meu-perfil', component: PerfilPetProviderComponent},
    //colocar rota guardada para criacao de agenda, atualmente não está indo, tentar entender o porque.
    { path: 'agenda/criacao-petprovider', component: CriacaoAgendaPetproviderComponent},
    { path: 'agendamento-pet-service/agendamento-pet-service/:id', component: ListaOpcoesHorariosServiceDisponiveisComponent, canActivate: [RoleGuard], data: {expectedRole: 'CLIENTE'}},

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
