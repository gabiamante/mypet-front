import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuInicialAdminComponent } from './menu-inicial-admin/menu-inicial-admin.component';
import {MenuModule } from 'primeng/menu';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import { PanelModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { DeletaPetClientComponent } from './menu-inicial-admin/deleta-pet-client/deleta-pet-client.component';

@NgModule({
  declarations: [
    MenuInicialAdminComponent,
    DeletaPetClientComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    TabViewModule,
    ButtonModule,
    PanelModule,
    FormsModule
  ]
})
export class AdministradorModule { }
