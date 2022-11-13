import { css } from 'styled-components';

import { styled } from '../../../styles';

export const Main = styled.main(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.darkTheme.primaryBackgroundColor};
  `,
);
export default Main;
