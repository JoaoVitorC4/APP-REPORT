import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  public cadastrar:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private userservice:UserService,
    private rota: Router
  ) { }

  ngOnInit() {
    console.log(this.cadastrar);
    this.setarFormulario();
  }

  public cadastraUsuario(){
    console.log(this.cadastrar.value);
    this.userservice.salvarUser(this.cadastrar.value).
    then(res => {
      console.log(res)
      this.rota.navigate([`/login`])
    }, error => console.error(error));
  }

  private setarFormulario() {
    this.cadastrar = this.formBuilder.group({
      name: [ , Validators.required],
      gender: [ , Validators.required],
      birth: [ , Validators.required],
      phone: [ , Validators.required],
      email: [ , Validators.required],
      password: [ , Validators.required],
      image: [ , ],
    });
  }

}
