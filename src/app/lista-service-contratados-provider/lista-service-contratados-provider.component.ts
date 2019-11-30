import { PessoaJuridica } from './../pessoa/pessoa-juridica';
import { JwtHelper } from 'angular2-jwt';
import { ListaServiceContratadosProviderService } from './lista-service-contratados-provider.service';
import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { Component, OnInit, Input } from '@angular/core';
import { CriacaoAgendaProvider } from '../petservice/criacao-agenda-petprovider/criacao-agenda-petprovider';
import { MatTabChangeEvent } from '@angular/material';
import Swal from 'sweetalert2';

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
  @Input() datas: string[] = [];
  listaPorTab: ServiceContratados[] = [];
  idAgendamento: string;


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

    setTimeout(() => {
      this.listaDatas();
    }, 1000);
  }

  listContratadosProvider() {
    this.serviceServiceContratados.listContratadosProvider()
      .subscribe(res => this.lstServiceContratados = res);
  }

  listaDatas() {

    const dNow = new Date
    var localdate = dNow.getDate() + '/' + (dNow.getMonth() + 1) + '/' + dNow.getFullYear()

    for (let element of this.lstServiceContratados) {
      if (element.dataCalendarioCorrecao >= localdate) {
        if (!this.datas.includes(element.dataCalendarioCorrecao)) {
          this.datas.push(element.dataCalendarioCorrecao);
        }
      }
    }
  }

  listContratadosProviderFiltro(varPetProvider: PessoaJuridica) {
    this.serviceServiceContratados.listContratadosProviderFiltro(this.varPetProvider.id + "")
      .subscribe(res => this.lstServiceContratados = res);
  }

  listAgendaProviderFiltrarNaoContratados(varPetProvider: PessoaJuridica) {
    this.serviceServiceContratados.listAgendaProviderFiltrarNaoContratados(varPetProvider.id + '').
      subscribe(res => this.lstCriacaoAgendaProviderAgendadoNaoContratados = res);
  }

  enviarIdAgendamento(id: string) {
    this.idAgendamento = null;
    this.idAgendamento = id;
  }

  gravarStatusFinalizado() {

    for (const element of this.lstServiceContratados) {
      if (element.id == Number(this.idAgendamento)) {
        element.status = true;
        this.serviceServiceContratados.gravarStatusFinalizado(element).subscribe(
          response => {
            Swal.fire(
              'Serviço Finalizado',
              'Seu serviço foi finalizado com sucesso!',
              'success'
            )
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

  public tabChanged(tabChangeEvent: MatTabChangeEvent): void {

    let data = this.datas[tabChangeEvent.index];

    this.listaPorTab = [];

    for (const element of this.lstServiceContratados) {
      if (data == element.dataCalendarioCorrecao) {
        this.listaPorTab.push(element);
      }

    }
  }

}
