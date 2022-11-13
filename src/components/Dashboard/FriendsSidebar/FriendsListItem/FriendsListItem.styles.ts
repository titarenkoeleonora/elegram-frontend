import { css } from 'styled-components';

import { styled } from '../../../../styles';

interface UserStatusProps {
  isOnline: boolean;
}

interface FriendsListItemWrapperProps {
  isActive: boolean;
}

const activeButtonStyles = css`
  background-color: ${({ theme }) => theme.darkTheme.lightGrey};
  border-radius: 15px;
`;

export const FriendsListItemWrapper = styled.li<FriendsListItemWrapperProps>(
  ({ isActive }) => css`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    list-style: none;

    &:hover {
      ${activeButtonStyles}
    }

    ${isActive && activeButtonStyles}
  `,
);

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const UserName = styled.p(
  ({ theme }) => css`
    padding: 0;
    margin: 0 0 5px 0;
    max-width: 300px;
    height: min-content;
    font-size: 12px;
    color: ${theme.darkTheme.primaryTextColor};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      max-width: 250px;
    }
  `,
);

export const UserStatus = styled.p<UserStatusProps>(
  ({ theme, isOnline }) => css`
    padding: 0;
    margin: 0;
    width: max-content;
    font-size: 10px;
    color: ${isOnline ? theme.darkTheme.successColor : theme.darkTheme.errorColor};
  `,
);
