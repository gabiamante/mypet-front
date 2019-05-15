import { Pipe, PipeTransform } from '@angular/core';
import { PetClient } from '../pet-client';


@Pipe({ name: 'filtroPeloNomePetClient' })
export class FiltroPeloNome implements PipeTransform {

    transform(petclients: PetClient[], nomeQuery: string) {
        nomeQuery = nomeQuery.trim().toLowerCase();
        if(nomeQuery) {
            return petclients.filter(petclient =>
                petclient.nomeCompleto.toLowerCase().includes(nomeQuery)
            );
        } else {
            return petclients;
        }
    }

}
