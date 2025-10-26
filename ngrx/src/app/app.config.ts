import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { userReducer } from './user.reducer';
import { counterReducer } from './counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideStore({
    user: userReducer,
    counter: counterReducer
  })]
};
