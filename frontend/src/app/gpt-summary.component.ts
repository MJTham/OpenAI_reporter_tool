import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gpt-summary',
  template: `
    <h3>GPT Summary</h3>
    <button (click)="getSummary()">Generate Summary</button>
    <p>{{summary}}</p>
  `
})
export class GptSummaryComponent {
  summary: string = "";

  constructor(private http: HttpClient) {}

  getSummary() {
    this.http.post<any>('http://localhost:8000/ai-summary', {}).subscribe(res => {
      this.summary = res.summary;
    });
  }
}
