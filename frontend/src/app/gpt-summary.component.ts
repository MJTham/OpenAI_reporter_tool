import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-gpt-summary',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './gpt-summary.component.html'
})
export class GptSummaryComponent {
  summary: string = '';
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  getSummary() {
    this.loading = true;
    this.summary = '';

    this.http.post<any>('https://glorious-memory-4q66655669r3qr59-8000.app.github.dev/ai-summary', {}, {
      withCredentials: false
    }).subscribe({
      next: (res) => {
        console.log("GPT response:", res);
        this.summary = res.summary || res.error || 'No summary returned.';
        this.loading = false;
      },
      error: (err) => {
        console.error("❌ GPT error", err);
        this.summary = 'Failed to generate summary.';
        this.loading = false;
      }
    });
  }
}