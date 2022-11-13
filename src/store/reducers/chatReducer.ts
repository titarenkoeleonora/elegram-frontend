import { createReducer } from '@reduxjs/toolkit';

import { ChatDetails, ChatType, MessageInterface } from '../../types';
import { chatActions } from '../actions/chatActions';

interface InitialState {
  chosenChatDetails: ChatDetails | null;
  chatType: ChatType;
  messages: MessageInterface[];
}

const initialState: InitialState = {
  chosenChatDetails: null,
  chatType: ChatType.DIRECT,
  messages: [],
};

export default createReducer(initialState, {
  [chatActions.SET_CHOSEN_CHAT_DETAILS]: (state, action) => {
    state.chosenChatDetails = action.chatDetails;
    state.chatType = action.chatType;
    state.messages = [];
  },

  [chatActions.CLEAR_CHOSEN_CHAT_DETAILS]: (state, action) => initialState,

  [chatActions.SET_MESSAGES]: (state, action) => void (state.messages = action.messages),
});
