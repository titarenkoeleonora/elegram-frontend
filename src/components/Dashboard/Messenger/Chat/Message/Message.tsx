import { FC } from 'react';

import { MessageInterface } from '../../../../../types';
import { TIME_FORMAT } from '../../../../../utils/constants';
import { humanizeDate } from '../../../../../utils/dateHelpers';
import Avatar from '../../../../UI/Avatar/Avatar';
import { Date, MessageWrapper, Text, TextWrapper } from './Message.styles';

interface MessageProps {
  message: MessageInterface;
  isSameAuthor: boolean;
}

const Message: FC<MessageProps> = ({ message, isSameAuthor }) => {
  const { author, content, date } = message;

  return (
    <MessageWrapper>
      {!isSameAuthor && <Avatar name={author.username} />}
      <TextWrapper isSameAuthor={isSameAuthor}>
        <Text>{content}</Text>
        <Date>{humanizeDate(date, TIME_FORMAT)}</Date>
      </TextWrapper>
    </MessageWrapper>
  );
};

export default Message;
