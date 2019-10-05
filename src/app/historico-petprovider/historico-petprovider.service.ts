import { ServiceContratados } from './../lista-service-contratados/lista-service-contratados';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:8080';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HistoricoPetproviderService {

  constructor(private http: HttpClient) { }


    listContratadosProviderFiltro(id: string): Observable<ServiceContratados[]>  {
      const url = API + '/contratadoprovider/historicoProvider?value=' + id;
      return this.http
      .get<ServiceContratados[]>(url);
    }

    buscarEmailLoginConjunto(email: string): Observable<any> {
      return this.http.get(API + '/loginConjunto/email?value=' + email);
    }
}
