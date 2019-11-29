import { HistoricoPetclientService } from './historico-petclient.service';
import { PessoaFisica } from './../pessoa/pessoa-fisica';
import { ListaServiceContratadosClientService } from './../lista-service-contratados-client/lista-service-contratados-client.service';
import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';


declare var $: any;

@Component({
  selector: 'app-historico-petclient',
  templateUrl: './historico-petclient.component.html',
  styleUrls: ['./historico-petclient.component.css']
})
export class HistoricoPetclientComponent implements OnInit {

  @Input() lstServiceContratados: ServiceContratados[] = [];
  serviceListaServiceContratadosClientService: ListaServiceContratadosClientService;
  varPetClient: PessoaFisica = new PessoaFisica();
  msg: string;
  avaliacao: number = 5;
  motivoDeCancelamentoQuandoFinalizado = '';
  @Input() servicoContratadoAvaliado: ServiceContratados = new ServiceContratados;

  constructor(private serviceServiceContratados: HistoricoPetclientService) { }

  ngOnInit() {

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);

    this.serviceServiceContratados.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPetClient = retorno;
      this.listContratadosProviderFiltro(this.varPetClient);
    });
  }


  listContratadosProviderFiltro(varPetProvider: PessoaFisica) {
    // console.log('component varPetProvider: ' + JSON.stringify(varPetProvider));
    this.serviceServiceContratados.listContratadosClientFiltro(this.varPetClient.id + '')
      .subscribe(res => this.lstServiceContratados = res);
  }


  salvarAvaliacao(lstServiceContratados: ServiceContratados[]) {

    for (const element of lstServiceContratados) {
      this.serviceServiceContratados.salvarAvaliacaoServico(element)
        .subscribe(res => {
          location.reload();
        });
    }
  }

  handleRate(event) {
    this.msg = 'Nota do serviço ' + event.value;
  }

  handleCancel(event) {
    this.msg = 'Nota cancelada';
  }

  handleMotivoCancelamento(event) {
    this.motivoDeCancelamentoQuandoFinalizado = 'Este serviço não foi cancelado';
  }

  setModalValue(varServiceContratado: ServiceContratados) {
    this.servicoContratadoAvaliado = varServiceContratado;
  }

  salvarAvaliacaoIndividual(servicoContratadoAvaliadoIndividual: ServiceContratados) {
    this.serviceServiceContratados.salvarAvaliacaoServico(servicoContratadoAvaliadoIndividual)
      .subscribe(res => {
        Swal.fire(
          'Avaliação feita',
          'Obrigada pela sua avaliação!',
          'success'
        )
        location.reload();
      });
  }



}

