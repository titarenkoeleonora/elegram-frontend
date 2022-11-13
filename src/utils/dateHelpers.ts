import moment from 'moment';

export const humanizeDate = (date: string | Date, format: string) => moment(date).format(format);

export const getIsToday = (date: string | Date) => moment(new Date(date)).isSame(new Date(), 'day');
