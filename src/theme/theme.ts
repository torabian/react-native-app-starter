import COLORS, {IColors} from './colors';
import LETTER_SPACING, {ILetterSpacing} from './letterSpacing';
import LINE_HEIGHTS, {ILineHeights} from './lines';
import SIZES, {ISizes} from './sizes';
import SPACING, {ISpacing} from './spacing';

export interface ITheme {
  sizes: ISizes & ISpacing;
  lines: ILineHeights;
  letters: ILetterSpacing;
  colors: IColors;
}

const appTheme: ITheme = {
  sizes: {
    ...SIZES,
    ...SPACING,
  },
  lines: LINE_HEIGHTS,
  letters: LETTER_SPACING,
  colors: COLORS,
};

export default appTheme;
