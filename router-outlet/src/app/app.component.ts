import { provideRouter, RouterLink, RouterOutlet, withDebugTracing, withPreloading } from '@angular/router';
import { routes } from './app.routes';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html'
})
export class AppComponent {}
