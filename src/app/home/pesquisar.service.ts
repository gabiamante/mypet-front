import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { PessoaJuridica } from '../pessoa/pessoa-juridica';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class PesquisarService {

  constructor(private http: HttpClient) { }

  buscar(){
      return this.http.get<PessoaJuridica[]>(API + 'pessoajuridica');
  }

}
