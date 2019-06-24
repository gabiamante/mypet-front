import { Component, OnInit, Input } from '@angular/core';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { PessoaFisica } from 'src/app/pessoa/pessoa-fisica';

@Component({
  selector: 'app-tabela-deleta-pet-clients',
  templateUrl: './tabela-deleta-pet-clients.component.html',
  styleUrls: ['./tabela-deleta-pet-clients.component.css']
})
export class TabelaDeletaPetClientsComponent implements OnInit {

  @Input() petclients: PessoaFisica[];
  cols: any[];

  constructor(private petClientService: PessoaService) {
               }

  ngOnInit() {

    this.listFromUser();

    this.cols = [
      {field: 'nomeCompleto', header: 'Nome Completo'},
      {field: 'email', header: 'E-mail'}
    ];
  }

  public listFromUser(){
    this.petClientService.listFromUser().subscribe(petclients => this.petclients = petclients);
  }

  public deletar(id: string) {
        this.petClientService.delete(id).subscribe(
          r => {
            this.listFromUser()
          }
        )
    }
}
