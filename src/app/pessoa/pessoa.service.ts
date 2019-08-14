import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PessoaFisica } from './pessoa-fisica';
import { PessoaJuridica } from './pessoa-juridica';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


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

        //DELETE NÃO LOGICO
        softDeletePessoaFisica(varPessoaFisica: PessoaFisica): Observable<PessoaFisica> {
          const url = `${API}/pessoafisica/${varPessoaFisica.id}`;
          console.log('url: ' + url);
          console.log('SERVICE: ' + varPessoaFisica.isActive);

          // return this.http.put(url, resource).pipe(
          //   map(() => resource),
          //   catchError(this.handleError)
          // );
          return this.http.put<PessoaFisica>(url, varPessoaFisica);
        }

        public deletePessoaJuridica(id: string) {
                return this.http.delete(API + '/pessoajuridica/' + id);
                  }

        public salvarPessoaFisica(pessoaFisica: PessoaFisica): Observable<PessoaFisica> {
                pessoaFisica.tipoPerfil = 1;
                //alert(JSON.stringify(pessoaFisica));
                return this.http.post<PessoaFisica>(API + '/pessoafisica', pessoaFisica);
        }

        public salvarPessoaJuridica(pessoaJuridica: PessoaJuridica): Observable<PessoaJuridica> {
          pessoaJuridica.tipoPerfil = 2;
          //alert(JSON.stringify(pessoaJuridica));
          return this.http.post<PessoaJuridica>(API + '/pessoajuridica', pessoaJuridica);
        }

        public atualizaPessoaJuridica(pessoaJuridica: PessoaJuridica): Observable<PessoaJuridica> {
          httpOptions.headers =  httpOptions.headers.set('Authorization', 'my-new-auth-token');
          //console.log('Requisição ---> ' + API + '/pessoajuridica/' + pessoaJuridica.id);
          //console.log('Pessoa para atualizar = ' + pessoaJuridica);
          return this.http.put<PessoaJuridica>(API + '/pessoajuridica/' + pessoaJuridica.id
          , pessoaJuridica, httpOptions).pipe(
            //catchError(this.handleError('403'))
          );
        }


        private handleError(error: HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`);
          }
          // return an observable with a user-facing error message
          return throwError(
            'Something bad happened; please try again later.');
        };
}
