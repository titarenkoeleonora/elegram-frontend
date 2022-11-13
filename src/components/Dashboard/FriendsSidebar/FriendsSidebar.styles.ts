import { css } from 'styled-components';

import { styled } from '../../../styles';

export const FriendsSidebarWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: calc(100vh - 48px);
    background-color: ${theme.darkTheme.backgroundColor};

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      width: 100vw;
    }
  `,
);

export const FriendsSidebarTitle = styled.p(
  ({ theme }) => css`
    color: ${theme.darkTheme.primaryTextColor};
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  `,
);

export const FriendsListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  overflow-y: auto;
`;
