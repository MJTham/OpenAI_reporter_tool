import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload.component';
import { DashboardComponent } from './dashboard.component';
import { GptSummaryComponent } from './gpt-summary.component';
import { Upload } from './upload/upload';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    DashboardComponent,
    GptSummaryComponent,
    Upload
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
