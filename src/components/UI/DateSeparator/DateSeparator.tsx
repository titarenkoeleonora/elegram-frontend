import { FC, PropsWithChildren } from 'react';

import { DateLabel, DateSeparatorComponent } from './DateSeparator.styles';

const DateSeparator: FC<PropsWithChildren> = ({ children }) => (
  <DateSeparatorComponent>
    <DateLabel>{children}</DateLabel>
  </DateSeparatorComponent>
);

export default DateSeparator;
