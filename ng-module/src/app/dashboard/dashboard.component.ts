import { Component } from '@angular/core';
import { Router, NavigationExtras, Navigation } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  userName: string = 'Guest';

  constructor(private router: Router) {
    const nav: Navigation | null = this.router.getCurrentNavigation();
    if (nav && nav.extras && nav.extras.state && nav.extras.state['user']) {
      this.userName = nav.extras.state['user'];
    }
  }
}
