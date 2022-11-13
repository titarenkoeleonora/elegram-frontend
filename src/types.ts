// auth

export interface UserDetails {
  mail: string;
  token: string;
  username: string;
  _id: string;
}

export interface LogInData {
  mail: string;
  password: string;
}

export interface SignUpData extends LogInData {
  username: string;
}

// chat

export interface ChatDetails {
  id: string | number;
  isOnline: boolean;
  name: string;
}

export enum ChatType {
  DIRECT = 'DIRECT',
  GROUP = 'GROUP',
}

export interface MessageInterface {
  _id: string;
  author: {
    _id: string;
    username: string;
  };
  content: string;
  date: string;
  type: string;
}

// friends

export interface Invitation {
  receiverId: string;
  senderId: {
    mail: string;
    username: string;
    _id: string;
  };
  _id: string;
}

export interface OnlineUser {
  userId: number;
  socketId: number;
}

export interface Friend {
  id: number;
  username: string;
  mail: string;
}

export interface InvitationData {
  targetMailAddress: string;
}

export interface ActionInvitationData {
  id: string;
}
