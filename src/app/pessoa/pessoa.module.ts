import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {InputMaskModule} from 'primeng/inputmask';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FileUploadModule} from 'primeng/fileupload';
import {RadioButtonModule} from 'primeng/radiobutton';
import { CadastroJuridicaComponent } from './pessoa-juridica/cadastro-juridica/cadastro-juridica.component';
import { CadastroFisicaComponent } from './pessoa-fisica/cadastro-fisica/cadastro-fisica.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    InputMaskModule,
    TableModule,
    ButtonModule,
    FileUploadModule,
    InputTextareaModule,
    RadioButtonModule
  ],
  declarations: [
    CadastroJuridicaComponent,
    CadastroFisicaComponent
  ],
  exports: [
    CadastroJuridicaComponent,
    CadastroFisicaComponent
  ]
})
export class PessoaModule { }
