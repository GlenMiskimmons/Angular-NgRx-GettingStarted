import { createFeatureSelector, MemoizedSelector, createSelector } from '@ngrx/store';

import * as RootState from '../../state/app.state';
import { User } from '../user';

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

export function reducer(state = initalState, action) {
    switch(action.type) {
        case 'MASK_USER_NAME':
            return {
                ...state,
                maskUserName: action.payload
            };
        default:
            return state;
    }
}
