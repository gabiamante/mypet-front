import { Pipe, PipeTransform } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';

@Pipe({ name: 'filtroPelaCidade'})
export class FiltroPelaCidade implements PipeTransform {

    transform(people: PessoaJuridica[], nomeQuery: string) {

        nomeQuery = nomeQuery.trim().toLowerCase();
        if (nomeQuery) {
            return people.filter(pessoa => pessoa.razaoSocial.toLowerCase().includes(nomeQuery)
            );
        } else {
            return people;
        }
    }
}