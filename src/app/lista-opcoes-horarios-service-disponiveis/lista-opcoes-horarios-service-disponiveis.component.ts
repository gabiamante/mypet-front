import { ActivatedRoute, Router } from '@angular/router';
import { ListaServiceContratadosService } from './../lista-service-contratados/lista-service-contratados.service';
import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { CriacaoAgendaPetproviderService } from './../petservice/criacao-agenda-petprovider/criacao-agenda-petprovider.service';
import { CriacaoAgendaProvider } from './../petservice/criacao-agenda-petprovider/criacao-agenda-petprovider';
import { Component, OnInit, Input } from '@angular/core';
import { ListaOpcoesHorariosServiceDisponiveisService } from './lista-opcoes-horarios-service-disponiveis.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-opcoes-horarios-service-disponiveis',
  templateUrl: './lista-opcoes-horarios-service-disponiveis.component.html',
  styleUrls: ['./lista-opcoes-horarios-service-disponiveis.component.css']
})
export class ListaOpcoesHorariosServiceDisponiveisComponent implements OnInit {

  varCriacaoAgendaProvider: CriacaoAgendaProvider;
  @Input() lstCriacaoAgendaProvider: CriacaoAgendaProvider[] = [];
  varServiceContratados: ServiceContratados;


  constructor(private serviceCriacaoAgendaProvider: ListaOpcoesHorariosServiceDisponiveisService
              , private activatedRoute: ActivatedRoute,
              private router: Router) {
                this.router = router;
    }

  ngOnInit() {
    const varAux = this.activatedRoute.snapshot.params.id;
    // alert(varAux);
    this.listAgendaProvider();
  }

  listAgendaProvider()  {
    this.serviceCriacaoAgendaProvider.listAgendaProvider()
    .subscribe(res => this.lstCriacaoAgendaProvider = res);
  }

  salvaAgendaProviderContratado(lstCriacaoAgendaProvider: CriacaoAgendaProvider[]) {
    const lstContratadoAgendaProvider: ServiceContratados[] = [];
    let count = 0;

    for (const element of lstCriacaoAgendaProvider)  {
      const varContratadoAgendaProvider: ServiceContratados = new ServiceContratados();
      if (element.selecaoHorario) {
        varContratadoAgendaProvider.nomeCliente = element.nomeCliente;
        varContratadoAgendaProvider.nomeProvider = element.nomeProvider;
        varContratadoAgendaProvider.tempoInicio = element.tempoInicioCorrecao;
        varContratadoAgendaProvider.tempoFim = element.tempoFimCorrecao;
        varContratadoAgendaProvider.siglaDia = element.siglaDia;
        varContratadoAgendaProvider.tipoService = element.servicoEscolhido;
        varContratadoAgendaProvider.dataEscolhida = null;
        varContratadoAgendaProvider.idPetClient = element.idPetClient;
        varContratadoAgendaProvider.idPetProvider = element.idPetProvider;
        varContratadoAgendaProvider.dataCalendarioCorrecao = element.dataCalendarioCorrecao;

        this.serviceCriacaoAgendaProvider.salvarEmServicosContratados(varContratadoAgendaProvider)
        .subscribe((res) => {
          this.varServiceContratados = res;
          alert('salvo sucesso');
          });


          // this.serviceCriacaoAgendaProvider.deleteCriacaoAgendaProvider(varContratadoAgendaProvider.idPetProvider)
          // .subscribe(res => this.listAgendaProvider());
      }
    }


  }


}
