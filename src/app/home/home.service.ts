import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { PessoaJuridica } from '../pessoa/pessoa-juridica';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import {catchError, map, take} from 'rxjs/operators';
import {throwError, Observable} from 'rxjs';

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
    //let param = new HttpParams().set('id', id.toString());
    console.log('>>>>>>> Requisição = ' + API + '/pessoajuridica/' + id);
    /*console.log('RETORNO do GET estatico = ' + this.http.get<PessoaJuridica>(API + '/pessoajuridica/' + 2)
    .pipe(map((data: any) => data.result ),
      catchError(error => { return throwError('Its a Trap!')})));*/



    return this.http.get<PessoaJuridica>(API + 'pessoajuridica/' + id)
    .pipe(map((data: any) => data.result ),
      catchError(error => { return throwError('Its a Trap!')}));
    }

    updateDetalhes(id: number, value: any): Observable<PessoaJuridica> {
      return this.http.put<PessoaJuridica>(API + '$/pessoajuridica/${id}', value);
    }

    abrirDetalhe(pessoa: PessoaJuridica): Observable<PessoaJuridica> {
      console.log('Requisição ----> ' + API + '/pessoajuridica/' + pessoa.id);
      return this.http.get<PessoaJuridica>(API + '/pessoajuridica/' + pessoa.id);
    }



}
