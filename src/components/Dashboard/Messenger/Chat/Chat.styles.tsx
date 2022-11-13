import { styled } from '../../../../styles';

export const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const MessagesWrapper = styled.ul`
  margin: 0;
  padding: 15px 20px;
  flex-grow: 1;
  overflow-y: auto;
`;
