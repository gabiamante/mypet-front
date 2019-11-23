
import { Component, OnInit, Input } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { ActivatedRoute, Router } from '@angular/router';
import { PesquisarService } from '../../home.service';
import { CriacaoAgendaProvider } from 'src/app/petservice/criacao-agenda-petprovider/criacao-agenda-petprovider';
import { ServiceContratados } from 'src/app/lista-service-contratados/lista-service-contratados';
import { PessoaFisica } from 'src/app/pessoa/pessoa-fisica';
import { ListaOpcoesHorariosServiceDisponiveisService } from 'src/app/lista-opcoes-horarios-service-disponiveis/lista-opcoes-horarios-service-disponiveis.service';
import { Pet } from 'src/app/pet/pet';
import { HistoricoPetclientService } from 'src/app/historico-petclient/historico-petclient.service';
import { HistoricoPetproviderService } from 'src/app/historico-petprovider/historico-petprovider.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  pessoa: PessoaJuridica;
  @Input() media: number = 0;

  msg: string;
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
  auxAvaliacoes: ServiceContratados[] = [];
  avaliacoes: ServiceContratados[] = [];
  islogged = false;
  listaGeralDeServicos: ServicosSelecionados[]= [];

  constructor(private pesquisarService: PesquisarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private serviceCriacaoAgendaProvider: ListaOpcoesHorariosServiceDisponiveisService,
    private serviceServiceContratados: HistoricoPetproviderService) {

    this.listaServicos =
      [
        { label: 'Selecionar', name: 'Selecione o serviço desejado' }
      ];
    this.listaDatas.push('Selecione uma data');
    this.listaHorarios.push('Selecione um horário');
    this.listaPets = [
      { label: 'Selecionar', name: 'Selecione o pet'}
    ]
    setTimeout(() => {
      this.trazerListaDeServicos();
    }, 1500);

    setTimeout(() => {
      this.serviceServiceContratados.listContratadosProviderFiltro(this.idProvider)
      .subscribe(
        res => {
          this.auxAvaliacoes = res
          this.filtrarAvaliacoes()});
    }, 2000)

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

    if(this.idClientAux != 0){
      this.islogged = true;
    }
  }

  filtrarAvaliacoes(){
    for(const element of this.auxAvaliacoes){
      if(element.avaliacao != 0){
        this.avaliacoes.push(element);
      }
    }
  }

  carregarServiços(){
      if (this.pessoa.acupuntura == 'acupuntura') {
        this.listaGeralDeServicos.push({ label: 'acupuntura', name: 'Acupuntura' })
      }
      if (this.pessoa.adestramento == 'adestramento') {
        this.listaGeralDeServicos.push({ label: 'adestramento', name: 'Adestramento' })
      }
      if (this.pessoa.banhoETosa == 'banhoETosa') {
        this.listaGeralDeServicos.push({ label: 'banhoETosa', name: 'Banho/Tosa' })
      }
      if (this.pessoa.cirurgiaGeral == 'cirurgiaGeral') {
        this.listaGeralDeServicos.push({ label: 'cirurgiaGeral', name: 'Cirurgia Geral' })
      }
      if (this.pessoa.consulta == 'consulta') {
        this.listaGeralDeServicos.push({ label: 'consulta', name: 'Consulta' })
      }
      if (this.pessoa.creche == 'creche') {
        this.listaGeralDeServicos.push({ label: 'creche', name: 'Creche' })
      }
      if (this.pessoa.ensaioFotografico == 'ensaioFotografico') {
        this.listaGeralDeServicos.push({ label: 'ensaioFotografico', name: 'Ensaio Fotográfico' })
      }
      if (this.pessoa.hidratacao == 'hidratacao') {
        this.listaGeralDeServicos.push({ label: 'hidratacao', name: 'Hidratação' })
      }
      if (this.pessoa.hotel == 'hotel') {
        this.listaGeralDeServicos.push({ label: 'hotel', name: 'Hotel' })
      }
      if (this.pessoa.massagem == 'massagem') {
        this.listaGeralDeServicos.push({ label: 'massagem', name: 'Massagem' })
      }
      if (this.pessoa.penteadosArtisticos == 'penteadosArtisticos') {
        this.listaGeralDeServicos.push({ label: 'penteadosArtisticos', name: 'Penteados Artísticos' })
      }
      if (this.pessoa.petwalk == 'petwalk') {
        this.listaGeralDeServicos.push({ label: 'petwalk', name: 'Pet Walk' })
      }
      if (this.pessoa.spa == 'spa') {
        this.listaGeralDeServicos.push({ label: 'spa', name: 'SPA' })
      }
      if (this.pessoa.taxi == 'taxi') {
        this.listaGeralDeServicos.push({ label: 'taxi', name: 'Táxi' })
      }
      if (this.pessoa.tosaExotica == 'tosaExotica') {
        this.listaGeralDeServicos.push({ label: 'tosaExotica', name: 'Tosa Exótica' })
      }
      if (this.pessoa.vacinacao == 'vacinacao') {
        this.listaGeralDeServicos.push({ label: 'vacinacao', name: 'Vacinação' })
      }
      if (this.pessoa.exames == 'exames') {
        this.listaGeralDeServicos.push({ label: 'exames', name: 'Exames' })
      }
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
  
  salvar() {

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

              varContratadoAgendaProvider.nomePet = String(this.petSelecionado);
              
            alert(JSON.stringify(varContratadoAgendaProvider))


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

  voltar() {
    this.router.navigate(['home', 'home']);
  }

  listAgendaProviderFiltrar(idProvider: string) {
    this.serviceCriacaoAgendaProvider.listAgendaProviderFiltrar(idProvider).subscribe(
      res => this.lstCriacaoAgendaProvider = res)
  }

  pets() {
    for (let element of this.listaPetsBanco) {
      this.listaPets.push({ label: String(element.id), name: element.nomePet});
    }
  }

  handleRate(event) {
    this.msg = 'Nota do serviço ' + event.value;
  }

  handleCancel(event) {
    this.msg = 'Nota cancelada';
  }

}
