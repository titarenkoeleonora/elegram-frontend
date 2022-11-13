import { css } from 'styled-components';

import { styled } from '../../../styles';

interface TextProps {
  image: string;
}

export const WelcomeBannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const Text = styled.p<TextProps>(
  ({ theme, image }) => css`
    padding: 0;
    margin: 0;
    position: relative;
    color: ${theme.darkTheme.primaryTextColor};
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    pointer-events: none;

    &::before {
      content: '';
      position: absolute;
      top: -90px;
      left: calc(50% - 38px);
      width: 75px;
      height: 80px;
      background-image: url(${image});
      background-repeat: no-repeat;
      background-size: 75px 80px;
    }
  `,
);
