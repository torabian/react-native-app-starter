import SIZES from './sizes';

export interface ILetterSpacing {
  // text letter spacing
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  p: number;
  text: number;
  small: number;
}

const LETTER_SPACING: ILetterSpacing = {
  // text letter spacing
  h1: SIZES.h1 * 0.03,
  h2: SIZES.h2 * 0.03,
  h3: SIZES.h3 * 0.03,
  h4: SIZES.h4 * 0.03,
  p: 0,
  text: 0,
  small: 0,
};

export default LETTER_SPACING;
