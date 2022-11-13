import { css } from 'styled-components';

import { styled } from '../../../styles';

export const AvatarWrapper = styled.p(
  ({ theme }) => css`
    margin: 0 10px 0 0;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background-color: ${theme.darkTheme.primaryTextColor};
    color: ${theme.darkTheme.primaryBackgroundColor};
    font-size: 16px;
    border-radius: 50%;
    font-weight: bold;
    text-transform: uppercase;
  `,
);
