import { Injectable } from '@angular/core';
import { PetHome } from './pet-home';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080';

@Injectable({providedIn: 'root'})
export class PetHomeService {

  constructor(private http: HttpClient) { }

    listFromUser() {
      return this.http
          .get<PetHome[]>(API + '/pethome');
  }

  public delete(id: string){
    return this.http.delete(API + '/pethome/' + id);
  }

  public salvar(petHome: PetHome): Observable<PetHome> {
    petHome.tipoPerfil = 1;
    alert(JSON.stringify(petHome));
    return this.http.post<PetHome>(API + '/pethome', petHome);
  }
}
