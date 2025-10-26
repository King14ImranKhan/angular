import { createAction, props } from '@ngrx/store';

export const addUser = createAction('[User] Add', props<{ name: string; email: string; age: number }>());
export const updateUser = createAction('[User] Update', props<{ name?: string; email?: string; age?: number }>());
export const resetUser = createAction('[User] Reset');
