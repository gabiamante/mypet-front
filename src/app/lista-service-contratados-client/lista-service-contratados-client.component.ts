import { CriacaoAgendaProvider } from './../petservice/criacao-agenda-petprovider/criacao-agenda-petprovider';
import { Observable } from 'rxjs';
import { PessoaJuridica } from '../pessoa/pessoa-juridica';
import { JwtHelper } from 'angular2-jwt';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { ListaServiceContratadosClientService } from './lista-service-contratados-client.service';
import { ServiceContratados } from '../lista-service-contratados/lista-service-contratados';
import { Input, Component, OnInit } from '@angular/core';
import { PessoaFisica } from '../pessoa/pessoa-fisica';
import { Alert } from 'selenium-webdriver';
import { MatTabChangeEvent } from '@angular/material';


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
  serviceListaServiceContratadosClientService: ListaServiceContratadosClientService;
  @Input() datas: string[] = [];
  listaPorTab: ServiceContratados[] = [];
  idAgendamento: string;
  id;

  // const objLogin;
  constructor(private serviceServiceContratados: ListaServiceContratadosClientService) {
  }

  ngOnInit() {

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);


    this.serviceServiceContratados.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPetClient = retorno;
      this.id = JSON.stringify(this.varPetClient);
      this.listContratadosProviderFiltro(this.varPetClient);
    });

    setTimeout(() => {
      this.listaDatas();
    }, 1000);
  }

  listContratadosProvider() {
    this.serviceServiceContratados.listContratadosClient()
      .subscribe(res => this.lstServiceContratados = res);
  }

  listaDatas() {

    for (let element of this.lstServiceContratados) {
        if (!this.datas.includes(element.dataCalendarioCorrecao)) {
          this.datas.push(element.dataCalendarioCorrecao);
        }
    }
  }

  enviarIdAgendamento(id: string) {
    this.idAgendamento = null;
    this.idAgendamento = id;
  }

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {

    let data = this.datas[tabChangeEvent.index];

    this.listaPorTab = [];

    for (const element of this.lstServiceContratados) {
      if (data == element.dataCalendarioCorrecao) {
        this.listaPorTab.push(element);
      }

    }
  }

  listContratadosProviderFiltro(varPetProvider: PessoaFisica) {
    // console.log('component varPetProvider: ' + JSON.stringify(varPetProvider));
    this.serviceServiceContratados.listContratadosClientFiltro(this.varPetClient.id + '')
      .subscribe(res => this.lstServiceContratados = res);
  }

  gravarStatusCanecelado(lstServiceContratados: ServiceContratados[]) {

    for (const element of lstServiceContratados) {
      let varAuxCriacaoAgendaProvider = new CriacaoAgendaProvider();
      if (element.cancelado) {
        // console.log(JSON.stringify(element));
        this.serviceServiceContratados.gravarStatusCanecelado(element).subscribe(
          response => {
            // location.reload();
            // alert('alterou para cancelado na contratado');
          }
        );

        this.serviceServiceContratados.buscarAgendaServicoContratadoCancelado(element).subscribe(
          response => {
            varAuxCriacaoAgendaProvider = response;
            alert(JSON.stringify(varAuxCriacaoAgendaProvider));
            this.serviceServiceContratados.gravarStatusCanceladoNaAgenda(varAuxCriacaoAgendaProvider).subscribe(
              response => {
                location.reload();
              }
            );
          }
        );

      }
    }
  }


}
