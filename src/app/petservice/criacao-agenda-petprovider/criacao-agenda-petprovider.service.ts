import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CriacaoAgendaProvider } from './criacao-agenda-petprovider';
import { Observable, throwError } from 'rxjs';

const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}



@Injectable({
  providedIn: 'root'
})
export class CriacaoAgendaPetproviderService {

  constructor(private http: HttpClient) { }

  salvarCriacaoAgendaProvider(lstCriacaoAgendaProviderToAttach: CriacaoAgendaProvider[]): Observable<any> {
    alert(JSON.stringify(lstCriacaoAgendaProviderToAttach));
    return this.http.post(API + '/agendaProvider/', lstCriacaoAgendaProviderToAttach);
  }

  salvarCriacaoAgendaProviderTeste(varCriacaoAgendaProviderToAttach: CriacaoAgendaProvider): Observable<any> {
    alert(JSON.stringify(varCriacaoAgendaProviderToAttach));
    return this.http.post(API + '/agendaprovider/', varCriacaoAgendaProviderToAttach);
  }
}
