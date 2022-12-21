import SIZES from './sizes';

export interface ILineHeights {
  // text line heights
  h1: number;
  h2: number;
  h3: number;
  h4: number;
  p: number;
  text: number;
  small: number;
}

const LINE_HEIGHTS: ILineHeights = {
  // text line heights
  h1: Math.round(SIZES.h1 * 1.1),
  h2: Math.round(SIZES.h2 * 1.2),
  h3: Math.round(SIZES.h3 * 1.3),
  h4: Math.round(SIZES.h4 * 1.3),
  p: Math.round(SIZES.p * 1.3),
  text: Math.round(SIZES.text * 1.3),
  small: Math.round(SIZES.small),
};

export default LINE_HEIGHTS;
