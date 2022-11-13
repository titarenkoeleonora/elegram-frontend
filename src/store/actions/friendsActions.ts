import * as api from '../../api/services';
import { ActionInvitationData, Friend, Invitation, InvitationData, OnlineUser } from '../../types';

export const friendsActions = {
  SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
  SET_PENDING_FRIENDS_INVITATIONS: 'FRIENDS.SET_PENDING_FRIENDS_INVITATIONS',
  SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS',
};

export const setPendingFriendsInvitations = (pendingFriendsInvitations: Invitation[]) => {
  return {
    type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
    pendingFriendsInvitations,
  };
};

export const setFriends = (friends: Friend[]) => {
  return {
    type: friendsActions.SET_FRIENDS,
    friends,
  };
};

export const setOnlineUsers = (onlineUsers: OnlineUser[]) => {
  return {
    type: friendsActions.SET_ONLINE_USERS,
    onlineUsers,
  };
};

export const sendFriendInvintation = (data: InvitationData) => {
  return async () => {
    const response = await api.sendFriendInvintation(data);

    if ('errorMessage' in response) {
      alert(response.errorMessage);
    } else {
      alert('Invitation has been send');
    }
  };
};

export const acceptFriendInvitation = (data: ActionInvitationData) => {
  return async () => {
    const response = await api.acceptFriendInvitation(data);

    if ('errorMessage' in response) {
      alert(response.errorMessage);
    } else {
      alert('Invitation accepted!');
    }
  };
};

export const rejectFriendInvitation = (data: ActionInvitationData) => {
  return async () => {
    const response = await api.rejectFriendInvitation(data);

    if ('errorMessage' in response) {
      alert(response.errorMessage);
    } else {
      alert('Invitation rejected!');
    }
  };
};
