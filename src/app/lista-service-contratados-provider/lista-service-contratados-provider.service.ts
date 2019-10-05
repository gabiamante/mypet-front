import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { Observable } from 'rxjs';
import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ListaServiceContratadosProviderService {

  constructor(private http: HttpClient) { }

  listContratadosProvider(): Observable<ServiceContratados[]>  {
    return this.http
    .get<ServiceContratados[]>(API + '/contratadoprovider');
  }

  // http://localhost:8080/contratadoprovider/idPetProvider?value=8

  listContratadosProviderFiltro(id: string): Observable<ServiceContratados[]>  {
    const url = API + '/contratadoprovider/idPetProvider?value=' + id;
    // console.log('url: ' + url);
    return this.http
    .get<ServiceContratados[]>(url);
  }

  buscarEmailLoginConjunto(email: string): Observable<any> {
    // console.log('email: ' + email);
    // console.log('url: ' + API + '/loginConjunto/email?value=' + email);
    return this.http.get(API + '/loginConjunto/email?value=' + email);
  }

  gravarStatusFinalizado(servicoFinalizado: ServiceContratados){
    return this.http.put(API + '/contratadoprovider/' + servicoFinalizado.id, servicoFinalizado);
  }

}
