import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  records: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://glorious-memory-4q66655669r3qr59-8000.app.github.dev/records').subscribe(data => {
      this.records = data;
    });
  }
}
