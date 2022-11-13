import { css } from 'styled-components';

import { styled } from '../../../styles';

export const HeaderWrapper = styled.header(
  ({ theme }) => css`
    padding: 5px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 48px;
    background-color: ${theme.darkTheme.backgroundColor};
    border-bottom: 1px solid #333333;
  `,
);
export const MobileHeaderWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

export const ChatHeaderWrapper = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
`;

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
    width: max-content;
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
