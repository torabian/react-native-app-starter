import {StyleSheet} from 'react-native';

export interface ISizes {
  // common sizes
  base: number;
  text: number;
  padding: number;

  // text sizes
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  p: number;
  small: number;

  // button sizes
  buttonHeight: number;
  buttonRadius: number;
  buttonBorder: number;

  // input sizes
  inputHeight: number;
  inputRadius: number;
  inputBorder: number;
}

const TEXT_SIZE = 16;

const SIZES: ISizes = {
  // common sizes
  base: 8,
  text: TEXT_SIZE,
  padding: 20,

  // text sizes
  h1: TEXT_SIZE + 2 * 8,
  h2: TEXT_SIZE + 2 * 6,
  h3: TEXT_SIZE + 2 * 4,
  h4: TEXT_SIZE + 2 * 2,
  p: TEXT_SIZE + 2,
  small: TEXT_SIZE - 2,

  // button sizes
  buttonHeight: 48,
  buttonRadius: 8,
  buttonBorder: 0,

  // input sizes
  inputHeight: 48,
  inputRadius: 8,
  inputBorder: StyleSheet.hairlineWidth,
};

export default SIZES;
