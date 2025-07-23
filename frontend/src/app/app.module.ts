import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload.component';
import { DashboardComponent } from './dashboard.component';
import { GptSummaryComponent } from './gpt-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    DashboardComponent,
    GptSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
