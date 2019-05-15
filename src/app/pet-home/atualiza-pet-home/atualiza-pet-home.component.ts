import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetHomeService } from '../pet-home.service';

@Component ({
  selector: 'app-atualiza-pet-home',
  templateUrl: './atualiza-pet-home.component.html',
  styleUrls: ['./atualiza-pet-home.component.css']
})
export class AtualizaPetHomeComponent implements OnInit {

  constructor(private petHomeService: PetHomeService,
              private router: Router) {
      this.router = router; }

  ngOnInit() {
  }
  public voltar(){
    this.router.navigate(['administrador', 'menu-inicial-admin']);
}
}
