import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-inicial-admin',
  templateUrl: './menu-inicial-admin.component.html',
  styleUrls: ['./menu-inicial-admin.component.css']
})
export class MenuInicialAdminComponent implements OnInit {

  constructor(private router: Router) {
      this.router = router;
}

  items: MenuItem[];

    ngOnInit() {
        this.items = [{
            label: 'File',
            items: [
                {label: 'New', icon: 'pi pi-fw pi-plus'},
                {label: 'Download', icon: 'pi pi-fw pi-download'}
            ]
        },
        {
            label: 'Edit',
            items: [
                {label: 'Add User', icon: 'pi pi-fw pi-user-plus'},
                {label: 'Remove User', icon: 'pi pi-fw pi-user-minus'}
            ]
        }];
    }

    public cadastro(){
      this.router.navigate(['petclients', 'cadastro']);
      }
    public buscar(){
      this.router.navigate(['petclients', 'busca']);
    }
    public atualizar(){
      this.router.navigate(['petclients', 'atualiza']);
    }

}
