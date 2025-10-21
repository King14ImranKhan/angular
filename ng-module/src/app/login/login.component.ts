import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';

  constructor(private router: Router) {}

  login() {
    if (this.username.trim()) {
      this.router.navigate(['/dashboard'], { state: { user: this.username } });
    }
  }
}
