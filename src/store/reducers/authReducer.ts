import { createReducer } from '@reduxjs/toolkit';

import { UserDetails } from '../../types';
import { authActions } from '../actions/authActions';

interface InitialState {
  userDetails: UserDetails | null;
}

const initialState: InitialState = {
  userDetails: null,
};

export default createReducer(initialState, {
  [authActions.SET_USER_DETAILS]: (state, action) => void (state.userDetails = action.userDetails),
});
