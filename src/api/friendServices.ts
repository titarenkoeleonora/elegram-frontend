import { ActionInvitationData, InvitationData } from '../types';
import { logout } from '../utils/auth';
import { StatusCode } from '../utils/constants';
import { apiClient } from './apiClient';

export const sendFriendInvintation = async (data: InvitationData) => {
  try {
    return await apiClient.post('/friend-invitation/invite', data);
  } catch (error: any) {
    checkResponseCode(error);

    return {
      errorMessage: error.response.data as string,
    };
  }
};

export const acceptFriendInvitation = async (data: ActionInvitationData) => {
  try {
    return await apiClient.post('/friend-invitation/accept', data);
  } catch (error: any) {
    checkResponseCode(error);

    return {
      errorMessage: error.response.data as string,
    };
  }
};

export const rejectFriendInvitation = async (data: ActionInvitationData) => {
  try {
    return await apiClient.post('/friend-invitation/reject', data);
  } catch (error: any) {
    checkResponseCode(error);

    return {
      errorMessage: error.response.data as string,
    };
  }
};

const checkResponseCode = (error: any) => {
  const responseCode = error?.response?.status;

  if (responseCode) {
    (responseCode === StatusCode.UNAUTHORIZED || responseCode === StatusCode.FORBIDDEN) && logout();
  }
};
