import React, {ReactNode} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as RNText,
  TextProps,
  TextStyle,
} from 'react-native';

import {useTheme} from '../../hooks/useTheme';

interface Props extends TextProps {
  children?: ReactNode;
  style?: StyleProp<TextStyle>;
  size?: TextStyle['fontSize'];
  color?: TextStyle['color'];
  weight?: TextStyle['fontWeight'];
  align?: TextStyle['textAlign'];

  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  p?: boolean;

  margin?: TextStyle['margin'];
  marginTop?: TextStyle['marginTop'];
  marginBottom?: TextStyle['marginBottom'];
  marginRight?: TextStyle['marginRight'];
  marginLeft?: TextStyle['marginLeft'];
  marginHorizontal?: TextStyle['marginHorizontal'];
  marginVertical?: TextStyle['marginVertical'];

  padding?: TextStyle['padding'];
  paddingTop?: TextStyle['paddingTop'];
  paddingBottom?: TextStyle['paddingBottom'];
  paddingRight?: TextStyle['paddingRight'];
  paddingLeft?: TextStyle['paddingLeft'];
  paddingHorizontal?: TextStyle['paddingHorizontal'];
  paddingVertical?: TextStyle['paddingVertical'];
}

const Text = ({
  children,
  style,
  size,
  color,
  weight,
  align,
  h1,
  h2,
  h3,
  h4,
  p,
  margin,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  marginHorizontal,
  marginVertical,
  padding,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  paddingHorizontal,
  paddingVertical,
  ...props
}: Props) => {
  const {colors, sizes, lines, letters} = useTheme();

  const textStyle = StyleSheet.flatten([
    {
      color: colors.text,
      fontSize: sizes.text,
      lineHeight: lines.text,
      letterSpacing: letters.text,
    },

    h1 !== undefined && {
      fontSize: sizes.h1,
      lineHeight: lines.h1,
      letterSpacing: letters.h1,
      fontWeight: '800',
    },
    h2 !== undefined && {
      fontSize: sizes.h2,
      lineHeight: lines.h2,
      letterSpacing: letters.h2,
      fontWeight: '700',
    },
    h3 !== undefined && {
      fontSize: sizes.h3,
      lineHeight: lines.h3,
      letterSpacing: letters.h3,
      fontWeight: '600',
    },
    h4 !== undefined && {
      fontSize: sizes.h4,
      lineHeight: lines.h4,
      letterSpacing: letters.h4,
      fontWeight: '500',
    },
    p !== undefined && {
      fontSize: sizes.p,
      lineHeight: lines.p,
      letterSpacing: letters.p,
    },

    size !== undefined && {fontSize: size},
    color !== undefined && {color: color},
    weight !== undefined && {fontWeight: weight},
    align !== undefined && {textAlign: align},

    margin !== undefined && {margin},
    marginTop !== undefined && {marginTop},
    marginBottom !== undefined && {marginBottom},
    marginRight !== undefined && {marginRight},
    marginLeft !== undefined && {marginLeft},
    marginHorizontal !== undefined && {marginHorizontal},
    marginVertical !== undefined && {marginVertical},

    padding !== undefined && {padding},
    paddingTop !== undefined && {paddingTop},
    paddingBottom !== undefined && {paddingBottom},
    paddingRight !== undefined && {paddingRight},
    paddingLeft !== undefined && {paddingLeft},
    paddingHorizontal !== undefined && {paddingHorizontal},
    paddingVertical !== undefined && {paddingVertical},

    style,
  ]) as TextStyle;

  return (
    <RNText style={textStyle} {...props}>
      {children}
    </RNText>
  );
};

export default Text;
