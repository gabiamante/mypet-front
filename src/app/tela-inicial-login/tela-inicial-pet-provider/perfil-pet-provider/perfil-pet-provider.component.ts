import { Component, OnInit } from '@angular/core';
import { PesquisarService } from 'src/app/home/home.service';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { ActivatedRoute } from '@angular/router';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';

@Component({
  selector: 'app-perfil-pet-provider',
  templateUrl: './perfil-pet-provider.component.html',
  styleUrls: ['./perfil-pet-provider.component.css']
})
export class PerfilPetProviderComponent implements OnInit {

  pessoa: PessoaJuridica;
  public pessoaJuridica: PessoaJuridica = new PessoaJuridica();

  constructor(
    private pesquisarService: PesquisarService,
    private petProviderService: PessoaService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    const token = localStorage.getItem("localUser")
    var obj = JSON.parse(token)

    this.pesquisarService.buscarDetalhesPorEmailPetProvider(obj.email).subscribe((retorno) => {
      this.pessoaJuridica = retorno;
    });
  }

  public alterar(){
    console.log(this.pessoaJuridica);
    this.petProviderService.atualizaPessoaJuridica(this.pessoaJuridica).subscribe(
      response => {
        alert('PetProvider alterado com sucesso!');
        window.location.href = '/login/tela-inicial-pet-provider';
      }
    );
  }
}
