export const theme = {
  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '960px',
  },
  darkTheme: {
    primaryTextColor: '#CDCDCD', // посмотреть нейминг переменных
    backgroundColor: '#000000',
    primaryColor: '#222222',
    secondaryColor: '#333333',
    darkGreyColor: '#0E0E0E',
    lightGrey: '#2B2B2B',
    successColor: '#6DB95A',
    errorColor: '#60100B',
    messageColor: '#343434',
  },
};

export type Theme = typeof theme;
