import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetClientService } from '../pet-client.service';

@Component ({
  selector: 'app-atualiza-pet-client',
  templateUrl: './atualiza-pet-client.component.html',
  styleUrls: ['./atualiza-pet-client.component.css']
})
export class AtualizaPetClientComponent implements OnInit {

  constructor(private petClientService: PetClientService,
              private router: Router) {
      this.router = router; }

  ngOnInit() {
  }
  public voltar(){
    this.router.navigate(['administrador', 'menu-inicial-admin']);
}
}
