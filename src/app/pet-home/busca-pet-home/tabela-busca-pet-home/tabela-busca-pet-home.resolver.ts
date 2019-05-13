import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PetHome } from '../../pet-home';
import { PetHomeService } from '../../pet-home.service';



@Injectable({ providedIn: 'root'})
export class TabelaBuscaPetHomeResolver implements Resolve<Observable<PetHome[]>>{

    constructor(private service: PetHomeService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.listFromUser();
    }
}