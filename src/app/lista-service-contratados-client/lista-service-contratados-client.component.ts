import { Observable } from 'rxjs';
import { PessoaJuridica } from '../pessoa/pessoa-juridica';
import { JwtHelper } from 'angular2-jwt';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import {ListaServiceContratadosClientService } from './lista-service-contratados-client.service';
import { ServiceContratados } from '../lista-service-contratados/lista-service-contratados';
import { Input, Component, OnInit } from '@angular/core';
import { PessoaFisica } from '../pessoa/pessoa-fisica';


@Component({
  selector: 'app-lista-service-contratados-client',
  templateUrl: './lista-service-contratados-client.component.html',
  styleUrls: ['./lista-service-contratados-client.component.css']
})
export class ListaServiceContratadosClientComponent implements OnInit {

  @Input() lstServiceContratados: ServiceContratados[] = [];
  varServiceContratados: ServiceContratados;
  jwtHelper: JwtHelper = new JwtHelper();
  varPetClient: PessoaFisica = new PessoaFisica();
 id;

  // const objLogin;
  constructor(private serviceServiceContratados: ListaServiceContratadosClientService,
    private servicePetProvider: PessoaService) {
     }

  ngOnInit() {

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);


    this.serviceServiceContratados.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPetClient = retorno;
     this.id = alert(JSON.stringify(this.varPetClient));
     this.listContratadosProviderFiltro(this.varPetClient);
    });


  }

  listContratadosProvider()  {
    this.serviceServiceContratados.listContratadosClient()
    .subscribe(res => this.lstServiceContratados = res);
  }

  listContratadosProviderFiltro(varPetProvider: PessoaFisica)  {
    // console.log('component varPetProvider: ' + JSON.stringify(varPetProvider));
    this.serviceServiceContratados.listContratadosClientFiltro(this.varPetClient.id + "")
    .subscribe(res => this.lstServiceContratados = res);
  }


}
