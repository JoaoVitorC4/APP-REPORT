import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public login: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.setarFormulario();
  }

  private setarFormulario() {
    this.login = this.formBuilder.group({
      usuario: [ , Validators.required],
      senha: [ , Validators.required],
    });
  }
}