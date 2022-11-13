import { FC, useState } from 'react';

import AddIcon from '../../../../images/add.svg';
import CloseIcon from '../../../../images/close.svg';
import {
  acceptFriendInvitation,
  rejectFriendInvitation,
} from '../../../../store/actions/friendsActions';
import { useAppDispatch } from '../../../../store/hooks';
import { Invitation } from '../../../../types';
import Avatar from '../../../UI/Avatar/Avatar';
import ButtonIcon from '../../../UI/Buttons/ButtonIcon/ButtonIcon';
import {
  InvitationButtonsContainer,
  PendingInvintationWrapper,
  UserInfoContainer,
  UserName,
} from './PendingInvitation.styles';

interface PendingInvitationProps {
  invitation: Invitation;
}

const PendingInvitation: FC<PendingInvitationProps> = ({ invitation }) => {
  const { senderId, _id } = invitation;

  const [isButtonsDisabled, setIsButtonsDisabled] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const onAcceptInvitation = () => {
    dispatch(acceptFriendInvitation({ id: _id }));
    setIsButtonsDisabled(true);
  };

  const onRejectInvitation = () => {
    dispatch(rejectFriendInvitation({ id: _id }));
    setIsButtonsDisabled(true);
  };

  return (
    <PendingInvintationWrapper>
      <Avatar name={senderId.username} />
      <UserInfoContainer>
        <UserName>{senderId.username}</UserName>
      </UserInfoContainer>
      <InvitationButtonsContainer>
        <ButtonIcon
          icon={AddIcon}
          alt="Accept invitation"
          disabled={isButtonsDisabled}
          small
          colorTheme="accept"
          onClick={onAcceptInvitation}
        />
        <ButtonIcon
          icon={CloseIcon}
          alt="Reject invitation"
          disabled={isButtonsDisabled}
          small
          colorTheme="reject"
          onClick={onRejectInvitation}
        />
      </InvitationButtonsContainer>
    </PendingInvintationWrapper>
  );
};

export default PendingInvitation;
