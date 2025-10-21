import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ParentComponent } from './components/parent/parent.component';
import { SiblingAComponent } from './components/sibling-a/sibling-a.component';
import { SiblingBComponent } from './components/sibling-b/sibling-b.component';
import { SiblingParentComponent } from './components/sibling-parent/sibling-parent.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DataBindingComponent,// DataBindingComponent for data binding example
    ParentComponent, // DatabindingComponent for parent-child communication example
    SiblingParentComponent], //SiblingParentComponent for SiblingAComponent and SiblingBComponent for sibling communication example
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding';
}
