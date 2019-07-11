import { Action } from '@ngrx/store';

export const enum UserActionTypes {
    ToggleMaskUserName = '[User] Mask Username'
}

export class ToggleMaskUsername implements Action {
    public readonly type: string = UserActionTypes.ToggleMaskUserName;

    constructor(public readonly payload: boolean) { }
}

export type UserActions = ToggleMaskUsername;
