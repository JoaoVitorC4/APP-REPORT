import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public login: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private userservice: UserService,
    private rota: Router,
  ) { }

  ngOnInit() {
    this.setarFormulario();
  }

  // private RealizaLogin(){
  //   console.log(this.login.value);
  //   this.userservice.Login(this.login.value).
  //   then(res => {
  //     console.log(res)
  //     this.rota.navigate([`/tabs/tab1`])
  //   }, error => console.error(error));
  // }

  public RealizaLogin(){
    console.log(this.login.value);
    this.userservice.Login(this.login.value).
    then(res => {
      console.log(res)
      this.rota.navigate([`/tabs/tab1`])
    }, error => console.error(error));
  }



  private setarFormulario() {
    this.login = this.formBuilder.group({
      email: [ , Validators.required],
      senha: [ , Validators.required],
    });
  }



}