import { Component } from '@angular/core';
import { Report } from '../models/reports.model';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public report: Array<Report>;

  constructor(private reportService: ReportService) {}

  ngOnInit(){
    this.buscarReport();
  }


  public buscarReport() {
    this.reportService.listaReports().subscribe(
      (res : Array<Report>) => {
        console.log(res)
        this.report = res;
    });
  }

  public visualizarReport(item) {
    console.log('Item: ', item);
  }

  public editarReport(id) {
    console.log('Id: ', id);
  }

}
