import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildAComponent } from '../child/child-a.component';

@Component({
  selector: 'app-parent-a',
  standalone: true,
  templateUrl: './parent-a.component.html',
  imports: [ChildAComponent]
})
export class ParentAComponent implements AfterViewInit {
  @ViewChild(ChildAComponent) child!: ChildAComponent;

  ngAfterViewInit() {
    console.log('ChildA instance:', this.child);
  }

  callChildAlert() {
    this.child.showAlert('Hello from ParentA Component!');
  }
}
