import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { PessoaJuridica } from '../pessoa/pessoa-juridica';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import {catchError, map, take} from 'rxjs/operators';
import {throwError, Observable} from 'rxjs';
import { PessoaFisica } from '../pessoa/pessoa-fisica';

const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class PesquisarService {

  private num: number;

  constructor(private http: HttpClient) { }

  buscar() {
      return this.http.get<PessoaJuridica[]>(API + '/pessoajuridica');
  }

  buscarDetalhes(id: number): Observable<PessoaJuridica> {
    return this.http.get<PessoaJuridica>(API + '/pessoajuridica/' + id)
    .pipe()
    }

    updateDetalhes(id: number, value: any): Observable<PessoaJuridica> {
      return this.http.put<PessoaJuridica>(API + '$/pessoajuridica/${id}', value);
    }

    abrirDetalhe(pessoa: PessoaJuridica): Observable<PessoaJuridica> {
      return this.http.get<PessoaJuridica>(API + '/pessoajuridica/' + pessoa.id);
    }

    buscarDetalhesPetClient(id: number): Observable<PessoaFisica> {
      return this.http.get<PessoaFisica>(API + '/pessoafisica/' + id)
      .pipe()
      }

}
