import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CriacaoAgendaProvider } from '../petservice/criacao-agenda-petprovider/criacao-agenda-petprovider';


const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ListaOpcoesHorariosServiceDisponiveisService {

  constructor(private http: HttpClient) { }

  listAgendaProvider(): Observable<CriacaoAgendaProvider[]>  {
    return this.http
    .get<CriacaoAgendaProvider[]>(API + '/agendaprovider');
  }

  listAgendaProviderFiltro(): Observable<CriacaoAgendaProvider[]>  {
    return this.http
    .get<CriacaoAgendaProvider[]>(API + '/agendaprovider');
  }


  // colocar nos contratados
  salvarEmServicosContratados(varContratadosAgendaProvider: ServiceContratados): Observable<ServiceContratados> {
    return this.http.post<ServiceContratados>(API + '/contratadoprovider/', varContratadosAgendaProvider);
  }

  //DELETE NÃO LOGICO
  softDeleteCriacaoAgendaProvider(varContratadosAgendaProvider: CriacaoAgendaProvider): Observable<CriacaoAgendaProvider> {
    const url = `${API}/agendaprovider/${varContratadosAgendaProvider.id}`;
    console.log('url: ' + url);
    // varContratadosAgendaProvider.active = false;
    return this.http.put<CriacaoAgendaProvider>(url, varContratadosAgendaProvider);
          }

  public deleteCriacaoAgendaProvider(idPetProvider: string) {
          return this.http.delete(API + '/agendaprovider/' + idPetProvider);
            }

}
