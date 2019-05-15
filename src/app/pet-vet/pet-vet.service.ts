import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetVet } from './pet-vet';
import { Observable } from 'rxjs';



const API = 'http://localhost:8080';


@Injectable({
  providedIn: 'root'
})
export class PetVetService {

  constructor(private http: HttpClient) { }


  listFromUser() {
    return this.http
    .get<PetVet[]>(API + '/petvets');
}

public delete(id: string){
    return this.http.delete(API + '/petvets/' + id);
    }

public salvar(petVet: PetVet): Observable<PetVet> {
  petVet.tipoPerfil = 1;
    alert(JSON.stringify(petVet));
    return this.http.post<PetVet>(API + '/petvets', petVet);
}
}
