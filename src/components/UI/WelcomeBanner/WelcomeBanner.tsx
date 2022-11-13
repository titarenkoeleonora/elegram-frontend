import { FC, PropsWithChildren } from 'react';

import { Text, WelcomeBannerWrapper } from './WelcomeBanner.styles';

interface WelcomeBannerProps extends PropsWithChildren {
  image: string;
}

const WelcomeBanner: FC<WelcomeBannerProps> = ({ children, image }) => (
  <WelcomeBannerWrapper>
    <Text image={image}>{children}</Text>
  </WelcomeBannerWrapper>
);

export default WelcomeBanner;
