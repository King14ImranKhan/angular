import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentForm: FormGroup;
  childFormData: any = {};

  constructor(private fb: FormBuilder) {
    this.parentForm = this.fb.group({
      name: [''],
      email: ['']
    });
  }

  // Send Parent → Child
  sendToChild() {
    this.childFormData = { ...this.parentForm.value };
  }

  // Receive Child → Parent
  receiveFromChild(data: any) {
    this.parentForm.patchValue(data);
  }
}
