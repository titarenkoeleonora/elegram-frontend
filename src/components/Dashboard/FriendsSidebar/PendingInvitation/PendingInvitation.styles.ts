import { css } from 'styled-components';

import { styled } from '../../../../styles';

export const PendingInvintationWrapper = styled.div`
  position: relative;
  padding: 5px 10px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-transform: none;
  background-color: transparent;
  border: none;
  font-weight: bold;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const UserAvatar = styled.div(
  ({ theme }) => css`
    margin-right: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.darkTheme.primaryTextColor};
    color: ${theme.darkTheme.backgroundColor};
    font-size: 16px;
    border-radius: 50%;
  `,
);

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.p(
  ({ theme }) => css`
    padding: 0;
    width: 100%;
    height: min-content;
    font-size: 12px;
    color: ${theme.darkTheme.primaryTextColor};
  `,
);

export const InvitationButtonsContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 10px;
`;
