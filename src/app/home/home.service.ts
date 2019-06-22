import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { PessoaJuridica } from '../pessoa/pessoa-juridica';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {catchError, map, take} from 'rxjs/operators';
import {throwError, Observable} from 'rxjs';

const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  buscar() {
      return this.http.get<PessoaJuridica[]>(API + '/pessoajuridica');
  }

  buscarDetalhes(id: number) {
        return this.http.get<PessoaJuridica[]>(API + '/pessoajuridica/' + id)
          .pipe(map((pj: any) => pj.result ),
          catchError(error => { return throwError('Its a Trap!')}));
    }
}
