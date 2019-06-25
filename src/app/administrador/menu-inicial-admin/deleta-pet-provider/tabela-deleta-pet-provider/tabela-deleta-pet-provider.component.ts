import { Component, OnInit, Input } from '@angular/core';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { PessoaService } from 'src/app/pessoa/pessoa.service';

@Component({
  selector: 'app-tabela-deleta-pet-provider',
  templateUrl: './tabela-deleta-pet-provider.component.html',
  styleUrls: ['./tabela-deleta-pet-provider.component.css']
})
export class TabelaDeletaPetProviderComponent implements OnInit {

  @Input() pessoas: PessoaJuridica[];
  cols: any[];

  constructor(private petProviderService: PessoaService) {
               }

  ngOnInit() {

    this.listFromUser();

    this.cols = [
      {field: 'nomeCompleto', header: 'Nome Completo'},
      {field: 'email', header: 'E-mail'}
    ];
  }

  public listFromUser(){
    this.petProviderService.listPessoaJuridica().subscribe(petclients => this.pessoas = petclients);
  }

  public deletar(id: string) {
        this.petProviderService.deletePessoaJuridica(id).subscribe(
          r => {
            this.listFromUser()
          }
        )
    }
}
