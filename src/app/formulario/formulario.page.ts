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
    this.formulario.patchValue({
      image: this.base64textString
    })
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
      image: '',
    });
  }

  base64textString ='';

  onUploadChange(evt: any) {
  const file = evt.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsBinaryString(file);
  }
}

handleReaderLoaded(e) {
  this.base64textString ='data:image/png;base64,' + btoa(e.target.result);
}



}
