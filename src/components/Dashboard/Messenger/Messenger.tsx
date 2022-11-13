import kitty from '../../../images/kitty.png';
import { useAppSelector } from '../../../store/hooks';
import WelcomeBanner from '../../UI/WelcomeBanner/WelcomeBanner';
import Chat from './Chat/Chat';
import { MessengerWrapper } from './Messenger.styles';

const Messenger = () => {
  const chosenChatDetails = useAppSelector((state) => state.chat.chosenChatDetails);

  return (
    <MessengerWrapper isChatActive={!!chosenChatDetails}>
      {chosenChatDetails ? (
        <Chat />
      ) : (
        <WelcomeBanner image={kitty}>Friends are waiting for your message</WelcomeBanner>
      )}
      <></>
    </MessengerWrapper>
  );
};

export default Messenger;
