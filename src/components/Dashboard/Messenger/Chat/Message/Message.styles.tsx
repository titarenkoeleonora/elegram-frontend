import { css } from 'styled-components';

import { styled } from '../../../../../styles';

interface TextWrapperProps {
  isSameAuthor: boolean;
}

export const MessageWrapper = styled.li`
  margin-bottom: 15px;
  display: flex;
`;

export const TextWrapper = styled.div<TextWrapperProps>(
  ({ theme, isSameAuthor }) => css`
    padding: 8px;
    margin-left: ${isSameAuthor && '45px'};
    display: flex;
    width: fit-content;
    min-width: 40px;
    border-radius: 5px;
    background-color: ${theme.darkTheme.messageColor};
    color: ${theme.darkTheme.primaryTextColor};
    font-weight: bold;
    letter-spacing: 0.15em;
  `,
);

export const Text = styled.p`
  padding: 0;
  margin: 0 0 10px 0;
  font-size: 14px;
`;

export const Date = styled.p`
  padding: 0;
  margin: 0;
  align-self: flex-end;
  font-size: 10px;
  opacity: 0.5;
`;
