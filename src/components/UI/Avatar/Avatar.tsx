import { FC } from 'react';

import { AvatarWrapper } from './Avatar.styles';

interface AvatarProps {
  name: string;
}

const Avatar: FC<AvatarProps> = ({ name }) => {
  const nameFirstLetter = name.substring(0, 1);

  return <AvatarWrapper>{nameFirstLetter}</AvatarWrapper>;
};

export default Avatar;
