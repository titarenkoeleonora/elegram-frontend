import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import authReducer from './reducers/authReducer';
import chatReducer from './reducers/chatReducer';
import friendsReducer from './reducers/friendsReducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
    friends: friendsReducer,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
