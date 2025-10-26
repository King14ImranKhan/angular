// 📁 src/app/template-form/template-form.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  user = { name: '', email: '', age: null };

  onSubmit(form: any) {
    console.log('Template-Driven Form Data:', form.value);
    alert('Template Form Submitted: ' + JSON.stringify(form.value));
  }
}
