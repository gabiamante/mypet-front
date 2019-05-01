import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rootRenderNodes } from '@angular/core/src/view';
import { PetClient } from './pet-client';

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
        public salvar (petClient: PetClient){
                return this.http.post<PetClient>(API + '/petclients/', petClient.id)

        }
}