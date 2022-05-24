import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Report } from '../models/reports.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private api = "http://127.0.0.1:8000/api";

  constructor(private http:HttpClient) { 

  };

  public listaReports() {
    return this.http.get(`${this.api}/reports`);
  }

  public salvarReports(report: Report) {
    return this.http.post(`${this.api}/reports`, report).toPromise();
  }

}
