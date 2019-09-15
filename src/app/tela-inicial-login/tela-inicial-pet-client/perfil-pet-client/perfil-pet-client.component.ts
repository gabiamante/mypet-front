import { Component, OnInit } from '@angular/core';
import { PessoaFisica } from 'src/app/pessoa/pessoa-fisica';
import { ActivatedRoute } from '@angular/router';
import { PesquisarService } from 'src/app/home/home.service';
import { PessoaService } from 'src/app/pessoa/pessoa.service';

@Component({
  selector: 'app-perfil-pet-client',
  templateUrl: './perfil-pet-client.component.html',
  styleUrls: ['./perfil-pet-client.component.css']
}) 
export class PerfilPetClientComponent implements OnInit {

  pessoa: PessoaFisica;
  public pessoaFisica: PessoaFisica = new PessoaFisica();

  constructor(private pesquisarService: PesquisarService,
              private petClientService: PessoaService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const pessoa = this.activatedRoute.snapshot.params.id;
    console.log("pessoa física: " + pessoa);
    this.pesquisarService.buscarDetalhesPetClient(pessoa).subscribe((retorno) => { 
      this.pessoaFisica = retorno;
    });
  }

  public cancelar(){
    
  }

  public alterar(){
    console.log(this.pessoaFisica);
    this.petClientService.atualizaPessoaFisica(this.pessoaFisica.id).subscribe(
      response => {
        alert('PetClient alterado com sucesso!');
        window.location.href = '/administrador/menu-inicial-admin';
      }
    );
  }
}
