import { Component, OnInit } from '@angular/core';
import { PesquisarService } from 'src/app/home/home.service';
import { PessoaJuridica } from 'src/app/pessoa/pessoa-juridica';
import { Router } from '@angular/router';
import { PessoaService } from 'src/app/pessoa/pessoa.service';

@Component({
  selector: 'app-perfil-pet-provider',
  templateUrl: './perfil-pet-provider.component.html',
  styleUrls: ['./perfil-pet-provider.component.css']
})
export class PerfilPetProviderComponent implements OnInit {

  public pessoaJuridica: PessoaJuridica = new PessoaJuridica();

  constructor(private pesquisarService: PesquisarService, private router: Router, private petProviderService: PessoaService) {
      this.router = router;
    }

  ngOnInit() {
    const token = localStorage.getItem("localUser")
    var obj = JSON.parse(token)

    this.pesquisarService.buscarDetalhesPorEmailPetProvider(obj.email).subscribe((retorno) => { 
      this.pessoaJuridica = retorno;
    });
  }

  public cancelar(){
    this.router.navigate(['login', 'tela-inicial-pet-provider']);
  }

  public alterar(){
    this.petProviderService.atualizaPessoaJuridica(this.pessoaJuridica).subscribe(
      response => {
        alert('PetProvider alterado com sucesso!');
        window.location.href = '/login/tela-inicial-pet-provider';
      }
    );
  }
  public softDelete(pessoaJuridica: PessoaJuridica){
    pessoaJuridica.active = false;
    this.petProviderService.softDeletePessoaJuridica(pessoaJuridica)
    .subscribe(response => {
      alert('PetProvider inativado com sucesso!')
      window.location.href = '/home/home';
    });
  }

}
