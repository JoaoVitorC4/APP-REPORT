import { Component, createPlatform, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {
  public formulario: FormGroup;

  constructor(  
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.setarFormulario();
  }

  private setarFormulario() {
    this.formulario = this.formBuilder.group({
      descricao: [ , Validators.required],
      // imagem: [ , Validators.required],
      imagem: [ , ],
    });
  }
}
