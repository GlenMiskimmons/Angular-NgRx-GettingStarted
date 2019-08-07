import { createFeatureSelector, MemoizedSelector, createSelector } from '@ngrx/store';

import * as RootState from '../../state/app.state';
import { UserState } from './user.reducer';

export interface State extends RootState.State {
    users: UserState;
}

const getUserFeatureSelector: MemoizedSelector<any, UserState> = createFeatureSelector<UserState>('users');

export const getMaskUserName = createSelector(getUserFeatureSelector, ((state: UserState) => state.maskUserName));
export const getCurrentUser = createSelector(getUserFeatureSelector, ((state: UserState) => state.currentUser));
