import { Component, OnInit, Input } from '@angular/core';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { PessoaFisica } from 'src/app/pessoa/pessoa-fisica';

@Component({
  selector: 'app-tabela-busca-pet-clients',
  templateUrl: './tabela-busca-pet-clients.component.html',
  styleUrls: ['./tabela-busca-pet-clients.component.css']
})
export class TabelaBuscarPetClientsComponent implements OnInit {

  @Input() petclients: PessoaFisica[];
  petclient: PessoaFisica;
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
    this.petClientService.listPessoaFisica().subscribe(petclients => this.petclients = petclients);
  }

  public deletar(id: string) {
        this.petClientService.deletePessoaFisica(id).subscribe(
          r => {
            this.listFromUser()
          }
        )
    }
}
