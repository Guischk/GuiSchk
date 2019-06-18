import colors from './colors';

const theme = {
  breakpoints: ['600px', '768px', '1024px'],
  space: [0, 2, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    sans: 'system-ui, helvetica',
    mono: 'consola, mono',
  },
  ...colors,
};

export default theme;
