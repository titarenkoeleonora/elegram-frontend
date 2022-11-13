import { FC, useEffect, useState } from 'react';

import AddIcon from '../../../images/add.svg';
import ArrowBackIcon from '../../../images/arrow-left.svg';
import { clearChosenChatDetails } from '../../../store/actions/chatActions';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { logout } from '../../../utils/auth';
import { MOBILE_WIDTH } from '../../../utils/constants';
import Avatar from '../../UI/Avatar/Avatar';
import ButtonIcon from '../../UI/Buttons/ButtonIcon/ButtonIcon';
import ButtonLink from '../../UI/Buttons/ButtonLink/ButtonLink';
import { UserStatus } from '../FriendsSidebar/FriendsListItem/FriendsListItem.styles';
import {
  ChatHeaderWrapper,
  HeaderWrapper,
  MobileHeaderWrapper,
  UserInfoContainer,
  UserName,
} from './Header.styles';

interface HeaderProps {
  openAddFriendsDialogue(): void;
}

const Header: FC<HeaderProps> = ({ openAddFriendsDialogue }) => {
  const chosenChatDetails = useAppSelector((state) => state.chat.chosenChatDetails);

  const dispatch = useAppDispatch();

  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  const onWindowResize = () => setWidth(window.innerWidth);

  const isMobile = width < MOBILE_WIDTH;

  const onBackButtonClick = () => dispatch(clearChosenChatDetails());

  return (
    <HeaderWrapper>
      {chosenChatDetails && isMobile ? (
        <MobileHeaderWrapper>
          <ButtonIcon
            icon={ArrowBackIcon}
            alt="Return to the chats list"
            colorTheme="secondary"
            onClick={onBackButtonClick}
          />
          <ChatHeaderWrapper>
            <Avatar name={chosenChatDetails.name} />
            <UserInfoContainer>
              <UserName>{chosenChatDetails.name}</UserName>
              <UserStatus isOnline={chosenChatDetails.isOnline}>
                {chosenChatDetails.isOnline ? 'online' : 'offline'}
              </UserStatus>
            </UserInfoContainer>
          </ChatHeaderWrapper>
        </MobileHeaderWrapper>
      ) : (
        <>
          <ButtonIcon
            icon={AddIcon}
            alt="Add friends"
            colorTheme="secondary"
            onClick={openAddFriendsDialogue}
          >
            Add friend
          </ButtonIcon>
          <ButtonLink onClick={logout}>Log out</ButtonLink>
        </>
      )}
    </HeaderWrapper>
  );
};

export default Header;
