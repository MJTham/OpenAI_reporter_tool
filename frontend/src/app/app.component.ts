import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { DashboardComponent } from './dashboard.component';
import { GptSummaryComponent } from './gpt-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UploadComponent, DashboardComponent, GptSummaryComponent],
  template: `
    <div style="padding: 2rem; font-family: Arial;">
      <h2>🤖 OpenAI Report Tool</h2>
      <app-upload></app-upload>
      <hr>
      <app-dashboard></app-dashboard>
      <hr>
      <app-gpt-summary></app-gpt-summary>
    </div>
  `
})
export class AppComponent {}