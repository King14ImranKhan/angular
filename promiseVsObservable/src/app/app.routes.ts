import { Routes } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ObservableEvenComponent } from './observable-even/observable-even.component';
import { ObservableOddComponent } from './observable-odd/observable-odd.component';

export const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  { path: 'observable', component: ObservableComponent },
  { path: 'even', component: ObservableEvenComponent },
  { path: 'odd', component: ObservableOddComponent }
];
