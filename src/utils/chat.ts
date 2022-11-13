import { setMessages } from '../store/actions/chatActions';
import { store } from '../store/store';
import { MessageInterface } from '../types';

interface UpdateDirectChatHistoryIfActiveProps {
  messages: MessageInterface[];
  participants: string[];
}

interface UpdateChatHistoryIfSameCoversationActiveProps
  extends UpdateDirectChatHistoryIfActiveProps {
  usersInConversation: (string | number)[];
}

export const updateDirectChatHistoryIfActive = (data: UpdateDirectChatHistoryIfActiveProps) => {
  const { participants, messages } = data;

  const receiverId = store.getState().chat.chosenChatDetails?.id;
  const userId = store.getState().auth.userDetails?._id;

  if (receiverId && userId) {
    const usersInConversation = [receiverId, userId];

    updateChatHistoryIfSameCoversationActive({
      participants,
      usersInConversation,
      messages,
    });
  }
};

const updateChatHistoryIfSameCoversationActive = ({
  participants,
  usersInConversation,
  messages,
}: UpdateChatHistoryIfSameCoversationActiveProps) => {
  const result = participants.every((participantId) => {
    return usersInConversation.includes(participantId);
  });

  if (result) {
    store.dispatch(setMessages(messages));
  }
};
