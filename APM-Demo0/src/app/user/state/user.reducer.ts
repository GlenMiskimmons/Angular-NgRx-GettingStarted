import { createFeatureSelector, MemoizedSelector, createSelector } from '@ngrx/store';

import * as RootState from '../../state/app.state';
import { User } from '../user';
import { UserActions, UserActionTypes } from './user.action';

export interface State extends RootState.State {
    users: UserState;
}

export interface UserState {
    maskUserName: boolean;
    currentUser: User;
}

const initalState: UserState = {
    maskUserName: false,
    currentUser: null
};

const getUserFeatureSelector: MemoizedSelector<any, UserState> = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(getUserFeatureSelector, ((state: UserState) => state.maskUserName));
export const getCurrentUser = createSelector(getUserFeatureSelector, ((state: UserState) => state.currentUser));

export function reducer(state = initalState, action: UserActions) {
    switch(action.type) {
        case UserActionTypes.ToggleMaskUserName:
            return {
                ...state,
                maskUserName: action.payload
            };
        default:
            return state;
    }
}
