import { Pipe, PipeTransform } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';

@Pipe({ name: 'filtroPelaCidade'})
export class FiltroPelaCidade implements PipeTransform {

    transform(pessoas: PessoaJuridica[], cidadeQuery: string) {

      cidadeQuery = cidadeQuery.trim().toLowerCase();
      console.log('Log da lista de nomeQuery = ' + cidadeQuery);
      console.log('Log da lista de pessoas juridicas = ' + pessoas);
        if (cidadeQuery) {
            return pessoas.filter(pessoa =>
              pessoa.cidade.toLowerCase().includes(cidadeQuery));
        } else {
            return pessoas;
        }
    }
}
