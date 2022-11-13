import { useEffect, useRef } from 'react';

import { getDirectChatHistory } from '../../../../api/socketConnection';
import kittyWrite from '../../../../images/kitty-write.png';
import { useAppSelector } from '../../../../store/hooks';
import { MessageInterface } from '../../../../types';
import { DATE_FORMAT } from '../../../../utils/constants';
import { getIsToday, humanizeDate } from '../../../../utils/dateHelpers';
import DateSeparator from '../../../UI/DateSeparator/DateSeparator';
import WelcomeBanner from '../../../UI/WelcomeBanner/WelcomeBanner';
import { ChatWrapper, MessagesWrapper } from './Chat.styles';
import Message from './Message/Message';
import NewMessageForm from './NewMessageForm/NewMessageForm';

const Chat = () => {
  const chosenChatDetails = useAppSelector((state) => state.chat.chosenChatDetails);
  const messages: MessageInterface[] = useAppSelector((state) => state.chat.messages);

  const MessagesAreaRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    getDirectChatHistory({
      receiverUserId: chosenChatDetails?.id,
    });
  }, [chosenChatDetails]);

  useEffect(() => {
    if (MessagesAreaRef.current) {
      MessagesAreaRef.current.scrollTo({
        top: MessagesAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const getIsSameAuthor = (message: MessageInterface, index: number): boolean =>
    index > 0 && message.author._id === messages[index - 1].author._id;

  const getIsSameDay = (message: MessageInterface, index: number): boolean =>
    index > 0 &&
    humanizeDate(message.date, DATE_FORMAT) === humanizeDate(messages[index - 1].date, DATE_FORMAT);

  const getDate = (date: string | Date): string =>
    getIsToday(date) ? 'today' : humanizeDate(date, DATE_FORMAT);

  return (
    <ChatWrapper>
      <>
        {messages.length ? (
          <MessagesWrapper ref={MessagesAreaRef}>
            {messages.map((message: MessageInterface, index: number) => {
              const isSameAuthor = getIsSameAuthor(message, index);
              const isSameDay = getIsSameDay(message, index);

              return (
                <div key={message._id}>
                  {!isSameDay && <DateSeparator>{getDate(message.date)}</DateSeparator>}
                  <Message message={message} isSameAuthor={isSameAuthor} />
                </div>
              );
            })}
          </MessagesWrapper>
        ) : (
          <WelcomeBanner image={kittyWrite}>Let&apos;s write to your new friend</WelcomeBanner>
        )}
        <NewMessageForm />
      </>
    </ChatWrapper>
  );
};

export default Chat;
