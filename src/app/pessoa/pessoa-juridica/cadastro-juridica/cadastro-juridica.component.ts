import { Component, OnInit } from '@angular/core';
import { PessoaJuridica } from '../../pessoa-juridica';
import { PessoaService } from '../../pessoa.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-juridica',
  templateUrl: './cadastro-juridica.component.html',
  styleUrls: ['./cadastro-juridica.component.css']
})
export class CadastroJuridicaComponent implements OnInit {

  public pessoaJuridica: PessoaJuridica = new PessoaJuridica();

  constructor(private pessoaJuridicaService: PessoaService,
              private router: Router) {

    this.router = router;
}

  ngOnInit() {

  }

  public salvar() {

    if(this.pessoaJuridica.banhoETosa)  {
      this.pessoaJuridica.banhoETosa = "banhoETosa"
    }else{
      this.pessoaJuridica.banhoETosa = null
    }

    if(this.pessoaJuridica.consulta)  {
      this.pessoaJuridica.consulta = "consulta"
    }else{
      this.pessoaJuridica.consulta = null
    }

    if(this.pessoaJuridica.tosaExotica)  {
      this.pessoaJuridica.tosaExotica = "tosaExotica"
    }else{
      this.pessoaJuridica.tosaExotica = null
    }

    if(this.pessoaJuridica.vacinacao)  {
      this.pessoaJuridica.vacinacao = "vacinacao"
    }else{
      this.pessoaJuridica.vacinacao = null
    }

    if(this.pessoaJuridica.cirurgiaGeral)  {
      this.pessoaJuridica.cirurgiaGeral = "cirurgiaGeral"
    }else{
      this.pessoaJuridica.cirurgiaGeral = null
    }

    if(this.pessoaJuridica.hidratacao)  {
      this.pessoaJuridica.hidratacao = "hidratacao"
    }else{
      this.pessoaJuridica.hidratacao = null
    }

    if(this.pessoaJuridica.penteadosArtisticos)  {
      this.pessoaJuridica.penteadosArtisticos = "penteadosArtisticos"
    }else{
      this.pessoaJuridica.penteadosArtisticos = null
    }

    if(this.pessoaJuridica.acupuntura)  {
      this.pessoaJuridica.acupuntura = "acupuntura"
    }else{
      this.pessoaJuridica.acupuntura = null
    }

    if(this.pessoaJuridica.spa)  {
      this.pessoaJuridica.spa = "spa"
    }else{
      this.pessoaJuridica.spa = null
    }

    if(this.pessoaJuridica.hotel)  {
      this.pessoaJuridica.hotel = "hotel"
    }else{
      this.pessoaJuridica.hotel = null
    }

    if(this.pessoaJuridica.creche)  {
      this.pessoaJuridica.creche = "creche"
    }else{
      this.pessoaJuridica.creche = null
    }

    if(this.pessoaJuridica.taxi)  {
      this.pessoaJuridica.taxi = "taxi"
    }else{
      this.pessoaJuridica.taxi = null
    }

    if(this.pessoaJuridica.ensaioFotografico)  {
      this.pessoaJuridica.ensaioFotografico = "ensaioFotografico"
    }else{
      this.pessoaJuridica.ensaioFotografico = null
    }

    if(this.pessoaJuridica.adestramento)  {
      this.pessoaJuridica.adestramento = "adestramento"
    }else{
      this.pessoaJuridica.adestramento = null
    }

    if(this.pessoaJuridica.massagem)  {
      this.pessoaJuridica.massagem = "massagem"
    }else{
      this.pessoaJuridica.massagem = null
    }

    if(this.pessoaJuridica.petwalk)  {
      this.pessoaJuridica.petwalk = "petwalk"
    }else{
      this.pessoaJuridica.petwalk = null
    }

    this.pessoaJuridicaService.salvarPessoaJuridica(this.pessoaJuridica).subscribe(
      response => {
        Swal.fire({
          position: 'center',
          type: 'success',
          title: 'Parabéns, seu cadastro foi concluído!',
          showConfirmButton: false,
          timer: 100000
        });
        window.location.href = 'home/home';
      }
    );
  }

  public voltar() {
    this.router.navigate(['administrador', 'menu-inicial-admin']);
  }




}
