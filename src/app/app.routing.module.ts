import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { BuscaPetClientComponent } from './pet-clients/busca-pet-client/busca-pet-client.component';
import { CadastraPetClientComponent } from './pet-clients/cadastra-pet-client/cadastra-pet-client.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { LoginComponent } from './login-geral/login/login.component';
import { EscolhaPerfilComponent } from './login-geral/escolha-perfil/escolha-perfil.component';
import { AcaoPerfilComponent } from './login-geral/acao-perfil/acao-perfil.component';
import { AtualizaPetClientComponent } from './pet-clients/atualiza-pet-client/atualiza-pet-client.component';
import { TabelaBuscaPetClientResolver } from './pet-clients/busca-pet-client/tabela-busca-pet-clients/tabela-busca-pet-client.resolver';
import { MenuInicialAdminComponent } from './administrador/menu-inicial-admin/menu-inicial-admin.component';
import { CadastraPetHomeComponent } from './pet-home/cadastra-pet-home/cadastra-pet-home.component';
import { DeletaPetClientComponent } from './pet-clients/deleta-pet-client/deleta-pet-client.component';
import { TabelaDeletaPetClientResolver } from './pet-clients/deleta-pet-client/tabela-deleta-pet-clients/tabela-deleta-pet-client.resolver';
import { AtualizaPetHomeComponent } from './pet-home/atualiza-pet-home/atualiza-pet-home.component';
import { BuscaPetHomeComponent } from './pet-home/busca-pet-home/busca-pet-home.component';
import { DeletaPetHomeComponent } from './pet-home/deleta-pet-home/deleta-pet-home.component';
import { CadastraPetShopComponent } from './pet-shop/cadastra-pet-shop/cadastra-pet-shop.component';
import { HomeComponent } from './home/home/home.component';
import { CadastraPetVetComponent } from './pet-vet/cadastra-pet-vet/cadastra-pet-vet.component';
import { PesquisarComponent } from './home/pesquisar/pesquisar.component';
import { CadastroFisicaComponent } from './pessoa/pessoa-fisica/cadastro-fisica/cadastro-fisica.component';
import { CadastroJuridicaComponent } from './pessoa/pessoa-juridica/cadastro-juridica/cadastro-juridica.component';
import { FornecedoresComponent } from './home/fornecedores/fornecedores.component';
import { QuemSomosComponent } from './home/quem-somos/quem-somos.component';

const routes: Routes = [
    { path: 'petclients/buscar', component: BuscaPetClientComponent,
        resolve: { petclients: TabelaBuscaPetClientResolver }},
    { path: 'petclients/deletar', component: DeletaPetClientComponent,
    resolve: { petclients: TabelaDeletaPetClientResolver }},
    { path: 'petclients/cadastrar', component: CadastraPetClientComponent },
    { path: 'petclients/atualizar', component: AtualizaPetClientComponent },

    { path: 'pethome/cadastrar', component: CadastraPetHomeComponent},
    { path: 'pethome/atualizar', component: AtualizaPetHomeComponent},
    { path: 'pethome/buscar', component: BuscaPetHomeComponent},
    { path: 'pethome/deletar', component: DeletaPetHomeComponent},

    { path: 'petshop/cadastrar', component: CadastraPetShopComponent},

    { path: 'petvet/cadastrar', component: CadastraPetVetComponent},

    { path: 'home/home', component: HomeComponent},
    { path: 'home/fornecedores', component: FornecedoresComponent},
    { path: 'home/quem-somos', component: QuemSomosComponent},
    { path: 'home/:petProvider', component: PesquisarComponent},

    { path: 'pessoa/fisica/cadastrar', component: CadastroFisicaComponent},
    { path: 'pessoa/juridica/cadastrar', component: CadastroJuridicaComponent},

    { path: 'logingeral/login', component: LoginComponent },
    { path: 'logingeral/escolhaperfil', component: EscolhaPerfilComponent },
    { path: 'logingeral/acaoperfil', component: AcaoPerfilComponent },
    { path: 'administrador/menu-inicial-admin', component: MenuInicialAdminComponent },
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
