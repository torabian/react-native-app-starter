import SIZES from './sizes';

export interface ISpacing {
  xs: number;
  s: number;
  sm: number;
  m: number;
  md: number;
  l: number;
  xl: number;
  xxl: number;
}

const SPACING: ISpacing = {
  xs: SIZES.base / 2, // 4
  s: SIZES.base, // 8
  sm: SIZES.base * 1.5, // 12
  m: SIZES.base * 2, // 16
  md: SIZES.base * 2.5, // 20
  l: SIZES.base * 3, // 24
  xl: SIZES.base * 3.5, // 28
  xxl: SIZES.base * 4, // 32
};

export default SPACING;
