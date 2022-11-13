export const theme = {
  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '960px',
  },
  darkTheme: {
    primaryTextColor: '#CDCDCD',
    primaryBackgroundColor: '#000000',
    secondaryBackgroundColor: '#0E0E0E',
    primaryButtonColor: '#222222',
    modalColor: '#2B2B2B',
    successColor: '#6DB95A',
    errorColor: '#60100B',
    messageColor: '#343434',
  },
};

export type Theme = typeof theme;
