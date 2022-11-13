import { css } from 'styled-components';

import { styled } from '../../../styles';

interface MessengerWrapperProps {
  isChatActive: boolean;
}

export const MessengerWrapper = styled.div<MessengerWrapperProps>(
  ({ theme, isChatActive }) => css`
    flex-grow: 1;
    height: calc(100vh - 48px);
    background-color: ${theme.darkTheme.darkGreyColor};

    @media screen and (max-width: ${theme.breakpoints.tablet}) {
      position: fixed;
      width: 100%;
      height: calc(100% - 48px);
      transform: ${isChatActive ? 'translateX(0)' : 'translateX(100%)'};
      transition: 1s;
    }
  `,
);
