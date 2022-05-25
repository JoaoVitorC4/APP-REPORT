import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  public formulario:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
  ) { }

  ngOnInit() {
    
  }

  private setarFormulario() {
    this.formulario = this.formBuilder.group({
      description: [ , Validators.required],
      // imagem: [ , Validators.required],
      image: [ , ],
    });
  }

}
