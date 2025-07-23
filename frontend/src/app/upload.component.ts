import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  template: `
    <h3>Upload Excel</h3>
    <input type="file" (change)="onFileSelected($event)">
  `
})
export class UploadComponent {
  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    this.http.post('http://localhost:8000/upload', formData).subscribe(res => {
      alert("Upload successful");
    });
  }
}
