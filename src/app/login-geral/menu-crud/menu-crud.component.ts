import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-crud',
  templateUrl: './menu-crud.component.html'
})


export class MenuCrudComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
                this.router = router;
  }
  ngOnInit(): void {

  }
  public cadastro(){
    this.router.navigate(['petclients', 'cadastro']);
    }
  public buscar(){
    this.router.navigate(['petclients', 'busca'])
  }
  public atualizar(){
    this.router.navigate(['petclients', 'atualiza'])
  }
}
