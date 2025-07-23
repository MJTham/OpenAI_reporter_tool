import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>OpenAI Report Tool</h2>
    <app-upload></app-upload>
    <app-dashboard></app-dashboard>
    <app-gpt-summary></app-gpt-summary>
  `
})
export class AppComponent {}
