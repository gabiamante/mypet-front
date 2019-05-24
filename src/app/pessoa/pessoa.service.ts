import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { PessoaFisica } from './pessoa-fisica';
import { PessoaJuridica } from './pessoa-juridica';
import { Observable } from 'rxjs';


const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) {}

        listPessoaFisica() {
                return this.http
                .get<PessoaFisica[]>(API + '/pessoafisica');
        }

        listPessoaJuridica() {
          return this.http.get<PessoaJuridica[]>(API + '/pessoajuridica');
  }


        //mesmo a id sendo number, fazemos ela em string para poder concatenar depois
        public deletePessoaFisica(id: string) {
                return this.http.delete(API + '/pessoafisica/' + id);
                }

        public deletePessoaJuridica(id: string) {
                return this.http.delete(API + '/pessoajuridica/' + id);
                  }

        public salvarPessoaFisica(pessoaFisica: PessoaFisica): Observable<PessoaFisica> {
                pessoaFisica.tipoPerfil = 1;
                alert(JSON.stringify(pessoaFisica));
                return this.http.post<PessoaFisica>(API + '/pessoafisica', pessoaFisica);
        }

        public salvarPessoaJuridica(pessoaJuridica: PessoaJuridica): Observable<PessoaJuridica> {
          pessoaJuridica.tipoPerfil = 2;
          alert(JSON.stringify(pessoaJuridica));
          return this.http.post<PessoaJuridica>(API + '/pessoajuridica', pessoaJuridica);
  }
}
