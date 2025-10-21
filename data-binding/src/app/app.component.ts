import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ParentComponent } from './components/parent/parent.component';
import { SiblingParentComponent } from './components/sibling-parent/sibling-parent.component';
import { UnRelatedSenderComponent } from './components/un-related/un-related-sender/un-related-sender.component';
import { UnRelatedReceiverComponent } from './components/un-related/un-related-receiver/un-related-receiver.component';
import { ParentAComponent } from './components/view-child-annotation/parent/parent-a.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DataBindingComponent,// DataBindingComponent for data binding example
    ParentComponent, // DatabindingComponent for parent-child communication example
    SiblingParentComponent, // SiblingParentComponent for sibling communication example
    UnRelatedSenderComponent, UnRelatedReceiverComponent, // Unrelated components communication example
    ParentAComponent],  // ParentComponentA for ViewChild annotation example
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding';
}
