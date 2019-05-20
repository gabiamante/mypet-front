import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PetProvider } from '../pet-provider';

@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  petprovider: PetProvider[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {
      this.router = router;
  }

  ngOnInit(): void {

    this.petprovider = this.activatedRoute.snapshot.data['petprovider'];

  }

}
