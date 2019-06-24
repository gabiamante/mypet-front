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

    

    //APROVAÇÃO
    public aprovarFornecedor(){
      this.router.navigate(['aprovacao', 'pessoa']);
      }

}
