import { Component, createPlatform, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})

export class FormularioPage implements OnInit {
  public formulario: FormGroup;

  constructor(  
    private formBuilder: FormBuilder,
    private reportservice: ReportService,
    private rota: Router
    ) { }

  ngOnInit() {
    this.setarFormulario();
  }

  public salvarReports(){
    console.log(this.formulario.value);
    this.reportservice.salvarReports(this.formulario.value).
    then(res => {
      console.log(res)
      this.rota.navigate([`tabs/tab2`])
    }, error => console.error(error));
  }


  private setarFormulario() {
    this.formulario = this.formBuilder.group({
      description: [ , Validators.required],
      // imagem: [ , Validators.required],
      image: [ , ],
    });
  }
}
