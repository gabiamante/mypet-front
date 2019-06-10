import { Pipe, PipeTransform } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';

@Pipe({ name: 'filtroCidade'})
export class FiltroPelaCidade implements PipeTransform {

    transform(pj: PessoaJuridica[], cidade: string) {
        cidade = cidade.trim().toLowerCase();

        if (cidade) {
            console.log('if');
            return pj.filter(pessoa => pessoa.cidade.toLowerCase().includes(cidade)
            );
        } else {
            console.log('else');
            return pj;
        }
    }
}