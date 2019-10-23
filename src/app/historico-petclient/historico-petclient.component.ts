import { HistoricoPetclientService } from './historico-petclient.service';
import { PessoaFisica } from './../pessoa/pessoa-fisica';
import { ListaServiceContratadosClientService } from './../lista-service-contratados-client/lista-service-contratados-client.service';
import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-historico-petclient',
  templateUrl: './historico-petclient.component.html',
  styleUrls: ['./historico-petclient.component.css']
})
export class HistoricoPetclientComponent implements OnInit {

  @Input() lstServiceContratados: ServiceContratados[] = [];
  serviceListaServiceContratadosClientService: ListaServiceContratadosClientService;
  varPetClient: PessoaFisica = new PessoaFisica();

  constructor(private serviceServiceContratados: HistoricoPetclientService) { }

  ngOnInit() {

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);

    this.serviceServiceContratados.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPetClient = retorno;
     this.listContratadosProviderFiltro(this.varPetClient);
    });
  }

  listContratadosProviderFiltro(varPetProvider: PessoaFisica)  {
    // console.log('component varPetProvider: ' + JSON.stringify(varPetProvider));
    this.serviceServiceContratados.listContratadosClientFiltro(this.varPetClient.id + '')
    .subscribe(res => this.lstServiceContratados = res);
  }

}