import { Observable } from 'rxjs';
import { PessoaJuridica } from './../pessoa/pessoa-juridica';
import { JwtHelper } from 'angular2-jwt';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { ListaServiceContratadosProviderService } from './lista-service-contratados-provider.service';
import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { Component, OnInit, Input } from '@angular/core';
import { CriacaoAgendaProvider } from '../petservice/criacao-agenda-petprovider/criacao-agenda-petprovider';

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
  @Input() lstCriacaoAgendaProviderAgendadoNaoContratados: CriacaoAgendaProvider[] = [];

  // const objLogin;
  constructor(private serviceServiceContratados: ListaServiceContratadosProviderService) {
     }

  ngOnInit() {

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);

    this.serviceServiceContratados.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPetProvider = retorno;
     // this.id = alert(JSON.stringify(this.varPetProvider));
     this.listContratadosProviderFiltro(this.varPetProvider);
     this.listAgendaProviderFiltrarNaoContratados(this.varPetProvider);
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
    console.log('this.lstServiceContratados: ' + this.lstServiceContratados);
  }

  listAgendaProviderFiltrarNaoContratados(varPetProvider: PessoaJuridica) {
    this.serviceServiceContratados.listAgendaProviderFiltrarNaoContratados(varPetProvider.id + '').
    subscribe(res => this.lstCriacaoAgendaProviderAgendadoNaoContratados = res);
  }

 gravarStatusFinalizado() {
  for (const element of this.lstServiceContratados) {
    if (element.status) {
      this.serviceServiceContratados.gravarStatusFinalizado(element).subscribe(
        response => {
          // alert('O serviço selecionado foi finalizado.');
          location.reload();
          });
      }
    }
  }

  gravarStatusCancelado() {
    for (const element of this.lstServiceContratados) {
      if (element.cancelado) {
        this.serviceServiceContratados.gravarStatusFinalizado(element).subscribe(
          response => {
            alert('O serviço selecionado foi cancelado.');
            location.reload();
            });
        }
      }
  }


}
