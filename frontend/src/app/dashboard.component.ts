import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  template: `
    <h3>Data Dashboard</h3>
    <table border="1">
      <tr><th>Timestamp</th><th>Metric</th><th>Value</th></tr>
      <tr *ngFor="let record of records">
        <td>{{record.timestamp}}</td>
        <td>{{record.metric}}</td>
        <td>{{record.value}}</td>
      </tr>
    </table>
  `
})
export class DashboardComponent implements OnInit {
  records: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8000/records').subscribe(data => {
      this.records = data;
    });
  }
}
