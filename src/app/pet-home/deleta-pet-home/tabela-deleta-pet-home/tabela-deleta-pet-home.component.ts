import { Component, OnInit, Input } from '@angular/core';
import { PetHome } from '../../pet-home';
import { PetHomeService } from '../../pet-home.service';


@Component({
  selector: 'app-tabela-deleta-pet-home',
  templateUrl: './tabela-deleta-pet-home.component.html',
  styleUrls: ['./tabela-deleta-pet-home.component.css']
})
export class TabelaDeletaPetHomeComponent implements OnInit {

  @Input() pethomes: PetHome[];
  cols: any[];

  constructor(private petHomeService: PetHomeService) {
               }

  ngOnInit() {

    this.listFromUser();

    this.cols = [
      {field: 'nomeCompleto', header: 'Nome Completo'},
      {field: 'email', header: 'E-mail'}
    ];
  }

  public listFromUser(){
    this.petHomeService.listFromUser().subscribe(pethomes => this.pethomes = pethomes);
  }

  public deletar(id: string) {
    this.petHomeService.delete(id).subscribe(
      r => {
        this.listFromUser();
      }
    )
}
}
