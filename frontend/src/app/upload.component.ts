import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './upload.component.html'
})
export class UploadComponent {
  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    console.log("📤 Uploading file:", file.name);

    this.http.post('https://glorious-memory-4q66655669r3qr59-8000.app.github.dev/upload', formData, { withCredentials: false }).subscribe({
      next: (res) => {
        console.log("✅ Upload success", res);
        alert("File uploaded!");
      },
      error: (err) => {
        console.error("❌ Upload failed", err);
        alert("Upload failed. Check backend.");
      }
    });
  }
}
