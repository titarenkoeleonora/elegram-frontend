import { createReducer } from '@reduxjs/toolkit';

import { Friend, Invitation, OnlineUser } from '../../types';
import { friendsActions } from '../actions/friendsActions';

interface InitialState {
  friends: Friend[];
  pendingFriendsInvitations: Invitation[];
  onlineUsers: OnlineUser[];
}

const initialState: InitialState = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

export default createReducer(initialState, {
  [friendsActions.SET_PENDING_FRIENDS_INVITATIONS]: (state, action) =>
    void (state.pendingFriendsInvitations = action.pendingFriendsInvitations),

  [friendsActions.SET_FRIENDS]: (state, action) => void (state.friends = action.friends),

  [friendsActions.SET_ONLINE_USERS]: (state, action) =>
    void (state.onlineUsers = action.onlineUsers),
});
