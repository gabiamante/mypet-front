import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { BuscaPetClientComponent } from './pet-clients/busca-pet-client/busca-pet-client.component';
import { CadastraPetClientComponent } from './pet-clients/cadastra-pet-client/cadastra-pet-client.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
    { path: 'petclients/busca', component: BuscaPetClientComponent },
    { path: 'petclients/cadastro', component: CadastraPetClientComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }