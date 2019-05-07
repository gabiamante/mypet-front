import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { BuscaPetClientComponent } from './pet-clients/busca-pet-client/busca-pet-client.component';
import { CadastraPetClientComponent } from './pet-clients/cadastra-pet-client/cadastra-pet-client.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { LoginComponent } from './login-geral/login/login.component';
import { EscolhaPerfilComponent } from './login-geral/escolha-perfil/escolha-perfil.component';
import { AcaoPerfilComponent } from './login-geral/acao-perfil/acao-perfil.component';
import { AtualizaPetClientComponent } from './pet-clients/atualiza-pet-client/atualiza-pet-client.component';
import { TabelaPetClientResolver } from './pet-clients/busca-pet-client/tabela-pet-clients/tabela-pet-client.resolver';
import { MenuCrudComponent } from './login-geral/menu-crud/menu-crud.component';

const routes: Routes = [
    { path: 'petclients/busca', component: BuscaPetClientComponent,
        resolve: { petclients: TabelaPetClientResolver

        }},
    { path: 'petclients/cadastro', component: CadastraPetClientComponent },
    { path: 'petclients/atualiza', component: AtualizaPetClientComponent },
    { path: 'logingeral/login', component: LoginComponent },
    { path: 'logingeral/escolhaperfil', component: EscolhaPerfilComponent },
    { path: 'logingeral/acaoperfil', component: AcaoPerfilComponent },
    { path: 'logingeral/menu-crud', component: MenuCrudComponent },
    { path: '', pathMatch: 'full', redirectTo: '/logingeral/login'},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
