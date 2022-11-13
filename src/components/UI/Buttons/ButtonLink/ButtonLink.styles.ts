import { css } from 'styled-components';

import { styled } from '../../../../styles';

export const ButtonLinkWrapper = styled.button(
  ({ theme }) => css`
    border: none;
    color: ${theme.darkTheme.primaryTextColor};
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    white-space: nowrap;
    background-color: transparent;
    cursor: pointer;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  `,
);
