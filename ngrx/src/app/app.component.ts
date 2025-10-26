import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addUser, resetUser } from './user.action';
import { increment, decrement, resetCounter } from './counter.action';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface AppState {
  user: { name: string; email: string };
  counter: { count: number };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  name = '';
  email = '';
  count$!: Observable<number>;
  user$!: Observable<any>;

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select('counter').pipe(map(state => state.count));
    this.user$ = this.store.select('user');
  }

  addUser() {
    this.store.dispatch(addUser({
      name: this.name, email: this.email,
      age: 0
    }));
  }

  resetUser() {
    this.store.dispatch(resetUser());
  }

  increment() { this.store.dispatch(increment()); }
  decrement() { this.store.dispatch(decrement()); }
  resetCounter() { this.store.dispatch(resetCounter()); }
}
