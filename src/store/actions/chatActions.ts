import { ChatDetails, ChatType, MessageInterface } from '../../types';

export const chatActions = {
  SET_CHOSEN_CHAT_DETAILS: 'CHAT.SET_CHOSEN_CHAT_DETAILS',
  CLEAR_CHOSEN_CHAT_DETAILS: 'CHAT.CLEAR_CHOSEN_CHAT_DETAILS',
  SET_MESSAGES: 'CHAT.SET_MESSAGES',
  SET_CHAT_TYPE: 'CHAT.SET_CHAT_TYPE',
};

export const setChosenChatDetails = (chatDetails: ChatDetails, chatType: ChatType) => {
  return {
    type: chatActions.SET_CHOSEN_CHAT_DETAILS,
    chatType,
    chatDetails,
  };
};

export const clearChosenChatDetails = () => {
  return {
    type: chatActions.CLEAR_CHOSEN_CHAT_DETAILS,
  };
};

export const setMessages = (messages: MessageInterface[]) => {
  return {
    type: chatActions.SET_MESSAGES,
    messages,
  };
};
