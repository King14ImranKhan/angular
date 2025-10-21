import { Component, signal } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  courseName: string = "Angular";

  stateName: string = "Tamil Nadu";

  inputType = "checkbox";

  rollNumber: number = 101;

  isIndian: boolean = false;

  currentDate: Date = new Date();

  myname = signal("John Doe");

  constructor() { }

  changeCourseName() {
    this.courseName = "ReactJS";
  }
}

