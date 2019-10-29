import { Component, OnInit } from '@angular/core';
import { PessoaFisica } from 'src/app/pessoa/pessoa-fisica';
import { ActivatedRoute, Router } from '@angular/router';
import { PesquisarService } from 'src/app/home/home.service';
import { PessoaService } from 'src/app/pessoa/pessoa.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-perfil-pet-client',
  templateUrl: './perfil-pet-client.component.html',
  styleUrls: ['./perfil-pet-client.component.css']
})
export class PerfilPetClientComponent implements OnInit {

  pessoa: PessoaFisica;
  public pessoaFisica: PessoaFisica = new PessoaFisica();

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

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

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.petClientService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('Arquivo salvo com sucesso!');
      }
    });

    this.selectedFiles = undefined;
  }

  public cancelar(){
    this.router.navigate(['login', 'tela-inicial-pet-client']);
  }

  public alterar(){
    console.log(this.pessoaFisica);
    this.petClientService.atualizaPessoaFisica(this.pessoaFisica).subscribe(
      response => {
        alert('PetClient alterado com sucesso!');
        window.location.href = '/login/tela-inicial-pet-client';
      }
    );
  }

}
