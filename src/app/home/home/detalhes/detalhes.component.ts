
import { Component, OnInit, Input } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { ActivatedRoute, Router } from '@angular/router';
import { PesquisarService } from '../../home.service';
import { CriacaoAgendaProvider } from 'src/app/petservice/criacao-agenda-petprovider/criacao-agenda-petprovider';
import { ServiceContratados } from 'src/app/lista-service-contratados/lista-service-contratados';
import { PessoaFisica } from 'src/app/pessoa/pessoa-fisica';
import { ListaOpcoesHorariosServiceDisponiveisService } from 'src/app/lista-opcoes-horarios-service-disponiveis/lista-opcoes-horarios-service-disponiveis.service';
import { Pet } from 'src/app/pet/pet';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  pessoa: PessoaJuridica;
  @Input() media: number = 0;

  varCriacaoAgendaProvider: CriacaoAgendaProvider;
  @Input() lstCriacaoAgendaProvider: CriacaoAgendaProvider[] = [];
  varServiceContratados: ServiceContratados;
  idProvider: string;
  varPessoaFisica: PessoaFisica = new PessoaFisica;
  idClientAux;
  atributosPet: string[] = ['Nome'];
  aux: string[] = [];
  listaServicos: ServicosSelecionados[] = [];
  varServicosSelecionados: ServicosSelecionados;
  listaDatas: string[] = [];
  varDataSelecionada: string;
  listaHorarios: string[] = [];
  listaHorariosFim: string[] = [];
  horarioSelecionado: string;
  listaPetsBanco: Pet[] = [];
  listaPets: PetSelecionado[] = [];
  petSelecionado: PetSelecionado;

  constructor(private pesquisarService: PesquisarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private serviceCriacaoAgendaProvider: ListaOpcoesHorariosServiceDisponiveisService) {
    this.router = router;
    this.listaServicos =
      [
        { label: 'Selecionar', name: 'Selecione o serviço desejado' }
      ];
    this.listaDatas.push('Selecione uma data');
    this.listaHorarios.push('Selecione um horário');
    setTimeout(() => {
      this.trazerListaDeServicos();
    }, 2000);
  }

  ngOnInit() {
    const pessoa = this.activatedRoute.snapshot.params.id;
    this.pesquisarService.buscarDetalhes(pessoa).subscribe(retorno => {
      this.pessoa = retorno
    });

    this.idProvider = this.activatedRoute.snapshot.params.id;
    this.listAgendaProviderFiltrar(this.idProvider);

    const token = localStorage.getItem('localUser');
    const objLogin = JSON.parse(token);

    this.serviceCriacaoAgendaProvider.buscarEmailLoginConjunto(objLogin.email).subscribe((retorno) => {
      this.varPessoaFisica = retorno;
      this.idClientAux = this.varPessoaFisica.id;

      this.serviceCriacaoAgendaProvider.buscaPet(this.idClientAux).subscribe(
        (response) => {
          this.listaPetsBanco = response;
        });
    });

  }

  trazerListaDeServicos() {

    for (let element of this.lstCriacaoAgendaProvider) {
      if (!this.aux.includes(element.servicoEscolhido)) {
        this.aux.push(element.servicoEscolhido)
      }
    }

    for (let element of this.aux) {
      if (element == 'Acupuntura') {
        this.listaServicos.push({ label: 'acupuntura', name: 'Acupuntura' })
      }
      if (element == 'Adestramento') {
        this.listaServicos.push({ label: 'adestramento', name: 'Adestramento' })
      }
      if (element == 'Banho/Tosa') {
        this.listaServicos.push({ label: 'banhoETosa', name: 'Banho/Tosa' })
      }
      if (element == 'Cirurgia Geral') {
        this.listaServicos.push({ label: 'cirurgiaGeral', name: 'Cirurgia Geral' })
      }
      if (element == 'Consulta') {
        this.listaServicos.push({ label: 'consulta', name: 'Consulta' })
      }
      if (element == 'Creche') {
        this.listaServicos.push({ label: 'creche', name: 'Creche' })
      }
      if (element == 'Ensaio Fotográfico') {
        this.listaServicos.push({ label: 'ensaioFotografico', name: 'Ensaio Fotográfico' })
      }
      if (element == 'Hidratação') {
        this.listaServicos.push({ label: 'hidratacao', name: 'Hidratação' })
      }
      if (element == 'Hotel') {
        this.listaServicos.push({ label: 'hotel', name: 'Hotel' })
      }
      if (element == 'Massagem') {
        this.listaServicos.push({ label: 'massagem', name: 'Massagem' })
      }
      if (element == 'Penteados Artísticos') {
        this.listaServicos.push({ label: 'penteadosArtisticos', name: 'Penteados Artísticos' })
      }
      if (element == 'Pet Walk') {
        this.listaServicos.push({ label: 'petwalk', name: 'Pet Walk' })
      }
      if (element == 'SPA') {
        this.listaServicos.push({ label: 'spa', name: 'SPA' })
      }
      if (element == 'Táxi') {
        this.listaServicos.push({ label: 'taxi', name: 'Táxi' })
      }
      if (element == 'Tosa Exótica') {
        this.listaServicos.push({ label: 'tosaExotica', name: 'Tosa Exótica' })
      }
      if (element == 'Vacinação') {
        this.listaServicos.push({ label: 'vacinacao', name: 'Vacinação' })
      }
      if (element == 'Exames') {
        this.listaServicos.push({ label: 'exames', name: 'Exames' })
      }

    }
    //alert(JSON.stringify(this.listaServicos));
  }

  datasDisponiveisServico() {
    for (let element of this.lstCriacaoAgendaProvider) {
      if (element.servicoEscolhido == String(this.varServicosSelecionados)) {
        this.listaDatas.push(element.dataCalendarioCorrecao);
      }
    }
  }

  limparServicoEData() {
    this.varServicosSelecionados = null;
    this.varDataSelecionada = '';
    this.listaDatas = []
  }

  limparDataEHorario() {
    this.varDataSelecionada = '';
    this.listaHorarios = [];
    this.horarioSelecionado = '';
  }

  limparHorarioEPet() {
    this.horarioSelecionado = '';
    this.petSelecionado = null;
    this.listaPets = [];
  }

  setTimeHorarios() {
    setTimeout(() => {
      this.horariosDisponiveisServico();
    }, 1000);
  }

  horariosDisponiveisServico() {
    for (let element of this.lstCriacaoAgendaProvider) {
      if (element.servicoEscolhido == String(this.varServicosSelecionados)) {
        if (element.dataCalendarioCorrecao == String(this.varDataSelecionada)) {
          this.listaHorarios.push(element.tempoInicioCorrecao)
          this.listaHorariosFim.push(element.tempoFimCorrecao)
        }
      }
    }
  }

  verPet(){
    alert(JSON.stringify(this.petSelecionado))
  }

  salvar() {
    //alert(JSON.stringify(this.varServicosSelecionados + this.varDataSelecionada + this.horarioSelecionado + this.petSelecionado))
    const varContratadoAgendaProvider: ServiceContratados = new ServiceContratados;

    for (const element of this.lstCriacaoAgendaProvider) {
      if (element.servicoEscolhido == String(this.varServicosSelecionados)) {
        if (element.dataCalendarioCorrecao == this.varDataSelecionada) {
          if (element.tempoInicioCorrecao == this.horarioSelecionado) {
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
            varContratadoAgendaProvider.tempoInicioReplicacao = element.tempoInicio;
            varContratadoAgendaProvider.tempoFimReplicacao = element.tempoFim;
            varContratadoAgendaProvider.dataParaOrdenacao = element.dataParaOrdenacao;

            varContratadoAgendaProvider.nomePet = this.petSelecionado.name;
            varContratadoAgendaProvider.idPet = Number(this.petSelecionado.label);


            this.serviceCriacaoAgendaProvider.salvarEmServicosContratados(varContratadoAgendaProvider)
              .subscribe((res) => {
                this.varServiceContratados = res;
                alert('O serviço foi contratado com sucesso!');
                window.location.href = 'contratados/petclient';
              });


            element.escolhido = true;
            this.serviceCriacaoAgendaProvider.atualizaEscolhido(element).subscribe(res => { });
          }
        }
      }
    }
  }

  agendar(forn: PessoaJuridica) {
    console.log(forn);
    this.router.navigate(['agendamento-pet-service', 'agendamento-pet-service', forn.id]);
  }
  voltar() {
    this.router.navigate(['home', 'home']);
  }

  listAgendaProviderFiltrar(idProvider: string) {
    this.serviceCriacaoAgendaProvider.listAgendaProviderFiltrar(idProvider).subscribe(
      res => this.lstCriacaoAgendaProvider = res)
    //alert(JSON.stringify(this.varCriacaoAgendaProvider)

  }

  pets() {
    for (let element of this.listaPetsBanco) {
      this.listaPets.push({ label: String(element.id), name: element.nomePet});
    }
  }

}
