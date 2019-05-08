import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuInicialAdminComponent } from './menu-inicial-admin/menu-inicial-admin.component';
import {MenuModule} from 'primeng/menu';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';
import { PanelModule } from 'primeng/primeng';

@NgModule({
  declarations: [MenuInicialAdminComponent],
  imports: [
    CommonModule,
    MenuModule,
    TabViewModule,
    ButtonModule,
    PanelModule
  ]
})
export class AdministradorModule { }
