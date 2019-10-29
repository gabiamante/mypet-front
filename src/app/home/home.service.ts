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
    
    buscarDetalhesPorEmail(email: string): Observable<PessoaFisica>{
      return this.http.get<PessoaFisica>(API + '/pessoafisica/email?value=' + email);
    }

    buscarDetalhesPorEmailPetProvider(email: string): Observable<PessoaJuridica>{
      return this.http.get<PessoaJuridica>(API + '/pessoajuridica/email?value=' + email);
    }

    buscarPetProvidersPorFiltro(pessoa: PessoaJuridica): Observable<PessoaJuridica[]>{

    return this.http.get<PessoaJuridica[]>(API + '/pessoajuridica/filtro?bairro=' + pessoa.bairro + '&cidade=' + pessoa.cidade + '&estado=' + pessoa.estado + 
    '&acupuntura=' + pessoa.acupuntura + '&adestramento=' + pessoa.adestramento + '&banhoETosa=' + pessoa.banhoETosa + '&cirurgiaGeral=' + 
    pessoa.cirurgiaGeral + '&consulta=' + pessoa.consulta + '&creche=' + pessoa.creche + '&ensaioFotografico=' + pessoa.ensaioFotografico + 
    '&hidratacao=' +  pessoa.hidratacao + '&hotel=' + pessoa.hotel + '&massagem=' + pessoa.massagem + 
    '&penteadosArtisticos=' + pessoa.penteadosArtisticos + '&petwalk=' + pessoa.petwalk + '&spa=' + pessoa.spa + '&taxi=' + pessoa.taxi + '&tosaExotica=' + 
    pessoa.tosaExotica + '&vacinacao=' + pessoa.vacinacao); 
    }

}
