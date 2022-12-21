import {ColorValue} from 'react-native';

export interface IColors {
  primary: ColorValue;
  secondary: ColorValue;
  tertiary: ColorValue;
  text: ColorValue;
  success: ColorValue;
  warning: ColorValue;
  error: ColorValue;
  white: ColorValue;
  black: ColorValue;
  // button colors
  buttonBorder: ColorValue;
  // input colors
  inputBorder: ColorValue;
}

const COLORS: IColors = {
  primary: '#3E8EF4',
  secondary: '#FD9900',
  tertiary: '#FE9EF4',
  text: '#14191F',
  success: '#64BC26',
  warning: '#FD6940',
  error: '#FD2000',
  white: '#FFFFFF',
  black: '#000000',
  buttonBorder: 'rgba(0,0,0,0.5)',
  inputBorder: 'rgba(0,0,0,0.5)',
};

export default COLORS;
