import { Component, OnInit } from '@angular/core';
import { PessoaFisica } from 'src/app/pessoa/pessoa-fisica';
import { ActivatedRoute, Router } from '@angular/router';
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
              private router: Router) {
                this.router = router;
          }

  ngOnInit() {
    
    const token = localStorage.getItem("localUser")
    var obj = JSON.parse(token)

    this.pesquisarService.buscarDetalhesPorEmail(obj.email).subscribe((retorno) => { 
      this.pessoaFisica = retorno;
    });
  }

  public cancelar(){
    this.router.navigate(['login', 'tela-inicial-pet-client']);
  }

  public alterar(){
    this.petClientService.atualizaPessoaFisica(this.pessoaFisica).subscribe(
      response => {
        alert('PetClient alterado com sucesso!');
        window.location.href = '/login/tela-inicial-pet-client';
      }
    );
  }
  public softDelete(pessoaFisica: PessoaFisica){
    pessoaFisica.active = false;
    this.petClientService.softDeletePessoaFisica(pessoaFisica)
    .subscribe(response => {
      alert('PetClient inativado com sucesso!')
      window.location.href = '/home/home';
    });
  }
}
