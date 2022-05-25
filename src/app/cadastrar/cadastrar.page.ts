import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  public cadastrar:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
  ) { }

  ngOnInit() {
    this.setarFormulario();
  }

  private setarFormulario() {
    this.cadastrar = this.formBuilder.group({
      name: [ , Validators.required],
      gender: [ , Validators.required],
      birth: [ , Validators.required],
      address: [ , Validators.required],
      phone: [ , Validators.required],
      email: [ , Validators.required],
      password: [ , Validators.required],
      // imagem: [ , Validators.required],
      image: [ , ],
    });
  }

}
