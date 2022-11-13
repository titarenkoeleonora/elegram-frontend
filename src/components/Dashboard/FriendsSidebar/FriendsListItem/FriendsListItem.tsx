import { FC } from 'react';

import { setChosenChatDetails } from '../../../../store/actions/chatActions';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { ChatType, Friend, OnlineUser } from '../../../../types';
import Avatar from '../../../UI/Avatar/Avatar';
import {
  FriendsListItemWrapper,
  UserInfoContainer,
  UserName,
  UserStatus,
} from './FriendsListItem.styles';

interface FriendsListItemProps {
  user: Friend;
}

const FriendsListItem: FC<FriendsListItemProps> = ({ user }) => {
  const chosenChatDetails = useAppSelector((state) => state.chat.chosenChatDetails);

  const { id, username } = user;

  const dispatch = useAppDispatch();

  const onlineUsers = useAppSelector((state) => state.friends.onlineUsers);
  const isOnline = !!onlineUsers.find((user: OnlineUser) => user.userId === id);

  const isActive = chosenChatDetails?.id === id;

  const onChooseActiveConversation = () => {
    dispatch(setChosenChatDetails({ id, name: username, isOnline }, ChatType.DIRECT));
  };

  return (
    <FriendsListItemWrapper isActive={isActive} onClick={onChooseActiveConversation}>
      <Avatar name={username} />
      <UserInfoContainer>
        <UserName>{username}</UserName>
        <UserStatus isOnline={isOnline}>{isOnline ? 'online' : 'offline'}</UserStatus>
      </UserInfoContainer>
    </FriendsListItemWrapper>
  );
};

export default FriendsListItem;
