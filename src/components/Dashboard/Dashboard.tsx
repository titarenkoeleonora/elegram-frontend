import { useEffect, useState } from 'react';

import { connectWithSocketServer } from '../../api/socketConnection';
import { setUserDetails } from '../../store/actions/authActions';
import { logout } from '../../utils/auth';
import { useAppDispatch } from '../../utils/hooks/reduxHooks';
import AddFriendsDialogue from './AddFriendDialogue/AddFriendDialogue';
import { DashboardWrapper } from './Dashboard.styles';
import FriendsSidebar from './FriendsSidebar/FriendsSidebar';
import Header from './Header/Header';
import Messenger from './Messenger/Messenger';

const Dashboard = () => {
  const dispatch = useAppDispatch();

  const [isAddFriendsOpen, setIsAddFriendsOpen] = useState<boolean>(false);

  useEffect(() => {
    const userDetails = localStorage.getItem('user');

    if (!userDetails) {
      logout();
    } else {
      dispatch(setUserDetails(JSON.parse(userDetails)));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, [dispatch]);

  const openAddFriendsDialogue = () => {
    setIsAddFriendsOpen(true);
  };

  const closeAddFriendsDialogue = () => {
    setIsAddFriendsOpen(false);
  };

  return (
    <>
      <Header openAddFriendsDialogue={openAddFriendsDialogue} />
      <DashboardWrapper>
        <FriendsSidebar />
        <Messenger />
        {isAddFriendsOpen && <AddFriendsDialogue onClose={closeAddFriendsDialogue} />}
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
