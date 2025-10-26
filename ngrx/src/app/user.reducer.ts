import { createReducer, on } from '@ngrx/store';
import { addUser, updateUser, resetUser } from './user.action';

export interface UserState {
  name: string;
  email: string;
  age: number;
}

export const initialState: UserState = {
  name: '',
  email: '',
  age: 0
};

export const userReducer = createReducer(
  initialState,
  on(addUser, (state, { name, email, age }) => ({ ...state, name, email, age })),
  on(updateUser, (state, { name, email, age }) => ({
    ...state,
    name: name ?? state.name,
    email: email ?? state.email,
    age: age ?? state.age
  })),
  on(resetUser, () => ({ ...initialState }))
);
