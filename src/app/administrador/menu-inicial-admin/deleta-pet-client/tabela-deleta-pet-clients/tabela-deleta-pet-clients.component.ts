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

  public listFromUser() {
    this.petClientService.listPessoaFisica().subscribe(petclients => this.petclients = petclients);
  }

  public deletar(id: string) {
        this.petClientService.deletePessoaFisica(id).subscribe(
          r => {
            this.listFromUser();
          }
        );
    }
/*
  public softDelete(varPessoaFisica: PessoaFisica) {
      this.softDeletePessoaFisica(varPessoaFisica).subscribe(
        response => varPessoaFisica = response
      )
  }*/

  public changeStatus(varPessoaFisica: PessoaFisica) {
    varPessoaFisica.active = false;
    console.log('varPessoaFisica: ' + varPessoaFisica.active);
    this.petClientService.softDeletePessoaFisica(varPessoaFisica)
    .subscribe(
      // res => varPessoaFisica = res
      res => {
        this.listFromUser();
      }
    );
  }
}
