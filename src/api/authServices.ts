import { LogInData, SignUpData } from '../types';
import { apiClient } from './apiClient';

export const logIn = async (data: LogInData) => {
  try {
    return await apiClient.post('/auth/login', data);
  } catch (error: any) {
    return {
      errorMessage: error?.response.data as string,
    };
  }
};

export const signUp = async (data: SignUpData) => {
  try {
    return await apiClient.post('/auth/registration', data);
  } catch (error: any) {
    return {
      errorMessage: error.response.data as string,
    };
  }
};
