import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  @Input() childData: any;
  @Output() childEvent = new EventEmitter<any>();

  childForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.childForm = this.fb.group({
      name: [''],
      email: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['childData'] && this.childData) {
      this.childForm.patchValue(this.childData);
    }
  }

  // Send Child → Parent
  sendToParent() {
    this.childEvent.emit(this.childForm.value);
  }
}
