import { useAppSelector } from '../../../store/hooks';
import { Friend, Invitation } from '../../../types';
import FriendsListItem from './FriendsListItem/FriendsListItem';
import {
  FriendsListWrapper,
  FriendsSidebarTitle,
  FriendsSidebarWrapper,
} from './FriendsSidebar.styles';
import PendingInvitation from './PendingInvitation/PendingInvitation';

const FriendsSidebar = () => {
  const friends = useAppSelector((state) => state.friends.friends);

  const invintations = useAppSelector((state) => state.friends.pendingFriendsInvitations);

  return (
    <FriendsSidebarWrapper>
      <FriendsSidebarTitle>Chats</FriendsSidebarTitle>
      <FriendsListWrapper>
        {friends.map((user: Friend) => (
          <FriendsListItem key={user.id} user={user} />
        ))}
      </FriendsListWrapper>
      {invintations && (
        <>
          <FriendsSidebarTitle>Invitations</FriendsSidebarTitle>
          {invintations.map((invitation: Invitation) => (
            <PendingInvitation key={invitation._id} invitation={invitation} />
          ))}
        </>
      )}
    </FriendsSidebarWrapper>
  );
};

export default FriendsSidebar;