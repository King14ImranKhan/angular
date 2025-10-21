import { Component } from '@angular/core';

@Component({
  selector: 'app-child-a',
  standalone: true,
  templateUrl: './child-a.component.html'
})
export class ChildAComponent {
  message = 'Hello from ChildA Component!';

  showAlert(msg?: string) {
    alert(msg || this.message);
  }
}
