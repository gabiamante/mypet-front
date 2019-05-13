import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PetHome } from '../pet-home';

@Component({
  selector: 'app-deleta-pet-home',
  templateUrl: './deleta-pet-home.component.html',
  styleUrls: ['./deleta-pet-home.component.css']
})

export class DeletaPetHomeComponent implements OnInit {

  filter: string = '';
  pethomes: PetHome[] = [];
  pethome: PetHome;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) {
                this.router = router;
  }
  ngOnInit(): void {

    this.pethomes = this.activatedRoute.snapshot.data['pethomes'];

  }
  public voltar(){
    this.router.navigate(['administrador', 'menu-inicial-admin']);
  }
}
