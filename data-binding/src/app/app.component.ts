import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ParentComponent } from './components/parent/parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBindingComponent,ParentComponent], // DatabindingComponent added here to reflect in app component html
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding';
}
