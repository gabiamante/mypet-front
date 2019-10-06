import { HistoricoPetproviderService } from './historico-petprovider.service';
import { ListaServiceContratadosProviderService } from './../lista-service-contratados-provider/lista-service-contratados-provider.service';
import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { Component, OnInit, Input } from '@angular/core';
import { PessoaJuridica } from '../pessoa/pessoa-juridica';

@Component({
  selector: 'app-historico-petprovider',
  templateUrl: './historico-petprovider.component.html',
  styleUrls: ['./historico-petprovider.component.css']
})
export class HistoricoPetproviderComponent implements OnInit {

  @Input() lstServiceContratados: ServiceContratados[] = [];
  varServiceContratados: ServiceContratados;
  varPetProvider: PessoaJuridica = new PessoaJuridica();

  constructor(private serviceServiceContratados: HistoricoPetproviderService) { }

  ngOnInit() {

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);

    this.serviceServiceContratados.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPetProvider = retorno;
     this.listContratadosProviderFiltro(this.varPetProvider);
    });

  }


  listContratadosProviderFiltro(varPetProvider: PessoaJuridica)  {
    this.serviceServiceContratados.listContratadosProviderFiltro(this.varPetProvider.id + '')
    .subscribe(res => this.lstServiceContratados = res);
    console.log('this.lstServiceContratados: ' + this.lstServiceContratados);
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

}
