import { Pipe, PipeTransform } from '@angular/core';
import { PessoaJuridica } from '../pessoa/pessoa-juridica';


@Pipe({ name: 'filtroBCE' }) //filtroBairroCidadeBairro
export class filtroBCE implements PipeTransform {

    transform(pj: PessoaJuridica[], bairro: string, cidade: string, estado: string) {

        bairro = bairro.trim().toLowerCase();
        cidade = cidade.trim().toLowerCase();
        estado = estado.trim().toLowerCase();

        if(bairro || cidade || estado){
            return pj.filter(pessoaJuridica => pessoaJuridica.razaoSocial.toLowerCase().includes(pessoaJuridica.razaoSocial));
        }
        else {
            return pj;
        }
    }

}