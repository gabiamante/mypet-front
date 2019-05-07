import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PetClient } from '../../pet-client';
import { PetClientService } from '../../pet-client.service';

@Injectable({ providedIn: 'root'})
export class TabelaPetClientResolver implements Resolve<Observable<PetClient[]>>{

    constructor(private service: PetClientService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const nomeCompleto = route.params.nomeCompleto;
        return this.service.listFromUser();
    }
}