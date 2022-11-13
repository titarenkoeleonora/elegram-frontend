import io from 'socket.io-client';

import {
  setFriends,
  setOnlineUsers,
  setPendingFriendsInvitations,
} from '../store/actions/friendsActions';
import { store } from '../store/store';
import { UserDetails } from '../types';
import { updateDirectChatHistoryIfActive } from '../utils/chat';
import { BASE_URL } from '../utils/constants';

interface GetDirectChatHistoryProps {
  receiverUserId: string | number | undefined;
}

interface SendDirectMessageProps extends GetDirectChatHistoryProps {
  content: string;
}

let socket = io();

export const connectWithSocketServer = (userDetails: UserDetails) => {
  const jwtToken = userDetails.token;

  socket = io(BASE_URL, {
    auth: {
      token: jwtToken,
    },
  });

  socket.on('connect', () => {
    console.log('succesfully connected with socket.io server');
  });

  socket.on('friends-invitations', (data) => {
    const { pendingInvitations } = data;

    store.dispatch(setPendingFriendsInvitations(pendingInvitations));
  });

  socket.on('friends-list', (data) => {
    const { friends } = data;

    store.dispatch(setFriends(friends));
  });

  socket.on('online-users', (data) => {
    const { onlineUsers } = data;

    store.dispatch(setOnlineUsers(onlineUsers));
  });

  socket.on('direct-chat-history', (data) => {
    updateDirectChatHistoryIfActive(data);
  });
};

export const sendDirectMessage = (data: SendDirectMessageProps) => {
  socket.emit('direct-message', data);
};

export const getDirectChatHistory = (data: GetDirectChatHistoryProps) => {
  socket.emit('direct-chat-history', data);
};
