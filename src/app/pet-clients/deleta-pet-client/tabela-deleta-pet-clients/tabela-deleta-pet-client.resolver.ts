import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PetClient } from '../../pet-client';
import { PetClientService } from '../../pet-client.service';

@Injectable({ providedIn: 'root'})
export class TabelaDeletaPetClientResolver implements Resolve<Observable<PetClient[]>>{

    constructor(private service: PetClientService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.service.listFromUser();
    }
}