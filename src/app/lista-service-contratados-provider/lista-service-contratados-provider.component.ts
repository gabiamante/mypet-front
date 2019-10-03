import { Observable } from 'rxjs';
import { PessoaJuridica } from './../pessoa/pessoa-juridica';
import { JwtHelper } from 'angular2-jwt';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { ListaServiceContratadosProviderService } from './lista-service-contratados-provider.service';
import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-service-contratados-provider',
  templateUrl: './lista-service-contratados-provider.component.html',
  styleUrls: ['./lista-service-contratados-provider.component.css']
})
export class ListaServiceContratadosProviderComponent implements OnInit {

  @Input() lstServiceContratados: ServiceContratados[] = [];
  varServiceContratados: ServiceContratados;
  jwtHelper: JwtHelper = new JwtHelper();
  varPetProvider: PessoaJuridica = new PessoaJuridica();
 id;

  // const objLogin;
  constructor(private serviceServiceContratados: ListaServiceContratadosProviderService,
    private servicePetProvider: PessoaService) {
     }

  ngOnInit() {

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);
   // this.getPessoaPorEmail(objLogin.email);
    //alert(JSON.stringify(this.getPessoaPorEmail(objLogin.email)));
    // console.log('objLogin.email: ' + objLogin.email);
    //alert(JSON.stringify(this.varPetProvider.email));

    this.serviceServiceContratados.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPetProvider = retorno;
     this.id = alert(JSON.stringify(this.varPetProvider));
     this.listContratadosProviderFiltro(this.varPetProvider);
    });


  }

  listContratadosProvider()  {
    this.serviceServiceContratados.listContratadosProvider()
    .subscribe(res => this.lstServiceContratados = res);
  }

  listContratadosProviderFiltro(varPetProvider: PessoaJuridica)  {
    // console.log('component varPetProvider: ' + JSON.stringify(varPetProvider));
    this.serviceServiceContratados.listContratadosProviderFiltro(this.varPetProvider.id + "")
    .subscribe(res => this.lstServiceContratados = res);
  }

  /**
  getPessoaPorEmail(email: string) {
   console.log('component varPetProvider: ' + JSON.stringify(email));
    this.serviceServiceContratados.buscarEmailLoginConjunto(email).subscribe(
      res => this.varPetProvider = res);
    console.log(this.varPetProvider);
  }
  */


}
