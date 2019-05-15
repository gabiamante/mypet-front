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
            label: 'Admin',
            items: [
                {label: 'Alterar senha', icon: ''},
                {label: 'Logout', icon: ''}
            ]
        },
        {
            label: '',
            items: [
                {label: '', icon: ''},
                {label: '', icon: ''}
            ]
        }];
    }

    //PET CLIENT
    public cadastrarPetClient(){
      this.router.navigate(['petclients', 'cadastrar']);
      }
    public buscarPetClient(){
      this.router.navigate(['petclients', 'buscar']);
    }
    public deletarPetClient(){
      this.router.navigate(['petclients', 'deletar']);
    }
    public atualizarPetClient(){
      this.router.navigate(['petclients', 'atualizar']);
    }

    //PET HOME
    public cadastrarPetHome(){
      this.router.navigate(['pethome', 'cadastrar']);
    }

    public buscarPetHome(){
      this.router.navigate(['pethome', 'buscar']);
    }

    public deletarPetHome(){
      this.router.navigate(['pethome', 'deletar']);
    }

    public atualizarPetHome(){
      this.router.navigate(['pethome', 'atualizar']);
    }

    //PET SHOP
    public atualizarPetShop(){
      this.router.navigate(['petshop', 'atualizar']);
    }

    public cadastrarPetShop(){
      this.router.navigate(['petshop', 'cadastrar']);
    }

    public buscarPetShop(){
      this.router.navigate(['petshop', 'buscar']);
    }

    public deletarPetShop(){
      this.router.navigate(['petshop', 'deletar']);
    }

}
