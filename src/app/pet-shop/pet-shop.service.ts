import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PetShop } from './pet-shop';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080';

@Injectable({providedIn: 'root'})
export class PetShopService {

  constructor(private http: HttpClient) {}

        listFromUser() {
                return this.http
                .get<PetShop[]>(API + '/petshop');
        }

        public delete(id: string){
                return this.http.delete(API + '/petshop/' + id);
                }

        public salvar(petShop: PetShop): Observable<PetShop> {
                petShop.tipoPerfil = 1;
                alert(JSON.stringify(petShop));
                return this.http.post<PetShop>(API + '/petshop', petShop);
        }
}
