import { Pipe, PipeTransform } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';

@Pipe({ name: 'filtroPelaCidade'})
export class FiltroPelaCidade implements PipeTransform {
    filtroCidade: PessoaJuridica[];
    filtroBairro: PessoaJuridica[];
    filtroEstado: PessoaJuridica[];

  transform(pessoas: PessoaJuridica[], cidadeQuery: string) {



      while (true) {
        this.filtroCidade = pessoas.filter(pessoa =>
          pessoa.cidade.toLowerCase().includes(cidadeQuery));

        this.filtroBairro = pessoas.filter(pessoa =>
           pessoa.bairro.toLowerCase().includes(cidadeQuery));

        
           this.filtroEstado = pessoas.filter(pessoa =>
           pessoa.estado.toLowerCase().includes(cidadeQuery));


      if (this.filtroCidade.length != 0) {
          return pessoas.filter(pessoa =>
            pessoa.cidade.toLowerCase().includes(cidadeQuery));
      }
      else if (this.filtroBairro.length != 0) {
          return pessoas.filter(pessoa =>
            pessoa.bairro.toLowerCase().includes(cidadeQuery));
      }
      else if (this.filtroEstado.length != 0) {
          return pessoas.filter(pessoa =>
            pessoa.estado.toLowerCase().includes(cidadeQuery));
      }
      else {
          return pessoas;
      }
    }
  }

}