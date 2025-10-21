import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ParentComponent } from './components/parent/parent.component';
import { SiblingAComponent } from './components/sibling-a/sibling-a.component';
import { SiblingBComponent } from './components/sibling-b/sibling-b.component';
import { SiblingParentComponent } from './components/sibling-parent/sibling-parent.component';
import { UnRelatedSenderComponent } from './components/un-related/un-related-sender/un-related-sender.component';
import { UnRelatedReceiverComponent } from './components/un-related/un-related-receiver/un-related-receiver.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    DataBindingComponent,// DataBindingComponent for data binding example
    ParentComponent, // DatabindingComponent for parent-child communication example
    SiblingParentComponent, // SiblingParentComponent for sibling communication example
    UnRelatedSenderComponent, UnRelatedReceiverComponent], // UnRelated components for unrelated communication example
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding';
}
