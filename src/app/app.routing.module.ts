import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { MenuInicialAdminComponent } from './administrador/menu-inicial-admin/menu-inicial-admin.component';
import { HomeComponent } from './home/home/home.component';
import { CadastroFisicaComponent } from './pessoa/pessoa-fisica/cadastro-fisica/cadastro-fisica.component';
import { CadastroJuridicaComponent } from './pessoa/pessoa-juridica/cadastro-juridica/cadastro-juridica.component';
import { FornecedoresComponent } from './home/fornecedores/fornecedores.component';
import { QuemSomosComponent } from './home/quem-somos/quem-somos.component';
import { PetHomeComponent } from './home/pesquisar/pet-home/pet-home.component';
import { PetVetComponent } from './home/pesquisar/pet-vet/pet-vet.component';
import { PetShopComponent } from './home/pesquisar/pet-shop/pet-shop.component';
import { PetWalkerComponent } from './home/pesquisar/pet-walker/pet-walker.component';

const routes: Routes = [
    { path: 'home/home', component: HomeComponent},
    { path: 'home/fornecedores', component: FornecedoresComponent},
    { path: 'home/quem-somos', component: QuemSomosComponent},

    { path: 'home/pesquisa/pet-home', component: PetHomeComponent},
    { path: 'home/pesquisa/pet-vet', component: PetVetComponent},
    { path: 'home/pesquisa/pet-shop', component: PetShopComponent},
    { path: 'home/pesquisa/pet-walker', component: PetWalkerComponent},

    { path: 'pessoa/fisica/cadastrar', component: CadastroFisicaComponent},
    { path: 'pessoa/juridica/cadastrar', component: CadastroJuridicaComponent},

    { path: 'administrador/menu-inicial-admin', component: MenuInicialAdminComponent },
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
