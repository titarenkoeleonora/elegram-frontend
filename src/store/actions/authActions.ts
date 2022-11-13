import { Dispatch } from '@reduxjs/toolkit';
import { NavigateFunction } from 'react-router-dom';

import * as api from '../../api/services';
import { LogInData, SignUpData, UserDetails } from '../../types';

export const authActions = {
  SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
};

export const setUserDetails = (userDetails: UserDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
  };
};

export const logIn = (userData: LogInData, history: NavigateFunction) => {
  return async (dispatch: Dispatch) => {
    const response = await api.logIn(userData);

    if ('errorMessage' in response) {
      alert(response.errorMessage);
    } else {
      const { userDetails } = response?.data;

      localStorage.setItem('user', JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      history('/dashboard');
    }
  };
};

export const signUp = (userData: SignUpData, history: NavigateFunction) => {
  return async (dispatch: Dispatch) => {
    const response = await api.signUp(userData);

    if ('errorMessage' in response) {
      alert(response.errorMessage);
    } else {
      const { userDetails } = response?.data;

      localStorage.setItem('user', JSON.stringify(userDetails));

      dispatch(setUserDetails(userDetails));
      history('/dashboard');
    }
  };
};
