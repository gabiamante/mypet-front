    import { Pipe, PipeTransform } from '@angular/core';
import { PetHome } from '../pet-home';


@Pipe({ name: 'filtroPeloNomePetHome' })
export class FiltroPeloNome implements PipeTransform {

    transform(pethomes: PetHome[], nomeQuery: string) {
        nomeQuery = nomeQuery.trim().toLowerCase();
        if(nomeQuery) {
            return pethomes.filter(pethome =>
                pethome.nomeCompleto.toLowerCase().includes(nomeQuery)
            );
        } else {
            return pethomes;
        }
    }

}
