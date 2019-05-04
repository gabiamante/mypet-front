import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rootRenderNodes } from '@angular/core/src/view';
import { PetClient } from './pet-client';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080';

@Injectable({providedIn: 'root'})
export class PetClientService {

        constructor(private http: HttpClient) {}

        listFromUser() {
            return this.http
                .get<PetClient[]>(API + '/petclients');
        }

        //mesmo a id sendo number, fazemos ela em string para poder concatenar depois
        public delete(id: string){
                return this.http.delete(API + '/petclients/' + id)
              }

        public salvar(petClient:PetClient): Observable<PetClient> {
          petClient.tipoPerfil = 1;
          alert(JSON.stringify(petClient));
          return this.http.post<PetClient>(API + '/petclients', petClient);
        }

        public atualizar(petClient:PetClient): Observable<PetClient>{

        }
}
