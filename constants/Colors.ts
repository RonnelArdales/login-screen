const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

// use this for common colors in project

export const commonColor = {
  main: '#F66B5E',
  secondary: '#015193',
  white: '#fff',
  black: '#191620',
  transparent: '#0000',
  lightBlue: '#88B4FF',
  lightBG: '#F9F9F9',
  dark: '#28292D',
  green: '#5DC16E',
  lgihtGreen: '#90EE90',
  textColor: '#0957DE',
  textDark: '#878787'
}

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};