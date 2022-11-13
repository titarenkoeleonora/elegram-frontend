import { css } from 'styled-components';

import { styled } from '../../../styles';

export const DateSeparatorComponent = styled.div(
  ({ theme }) => css`
    position: relative;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    height: 1px;
    background-color: ${theme.darkTheme.messageColor};
  `,
);

export const DateLabel = styled.span(
  ({ theme }) => css`
    position: absolute;
    top: -7px;
    padding: 0 5px;
    color: ${theme.darkTheme.messageColor};
    font-weight: bold;
    letter-spacing: 0.15em;
    font-size: 14px;
    background-color: ${theme.darkTheme.darkGreyColor};
    text-transform: uppercase;
  `,
);
