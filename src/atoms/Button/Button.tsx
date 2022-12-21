import React, {ReactNode} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';

import {useTheme} from '../../hooks/useTheme';

interface Props extends TouchableOpacityProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  radius?: ViewStyle['borderRadius'];
  color?: ViewStyle['backgroundColor'];
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  center?: boolean;

  margin?: ViewStyle['margin'];
  marginTop?: ViewStyle['marginTop'];
  marginBottom?: ViewStyle['marginBottom'];
  marginRight?: ViewStyle['marginRight'];
  marginLeft?: ViewStyle['marginLeft'];
  marginHorizontal?: ViewStyle['marginHorizontal'];
  marginVertical?: ViewStyle['marginVertical'];

  padding?: ViewStyle['padding'];
  paddingTop?: ViewStyle['paddingTop'];
  paddingBottom?: ViewStyle['paddingBottom'];
  paddingRight?: ViewStyle['paddingRight'];
  paddingLeft?: ViewStyle['paddingLeft'];
  paddingHorizontal?: ViewStyle['paddingHorizontal'];
  paddingVertical?: ViewStyle['paddingVertical'];
}

const Button = ({
  children,
  style,
  radius,
  color,
  align,
  justify,
  center,
  activeOpacity = 0.8,
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
  const {colors, sizes} = useTheme();

  const buttonStyle = StyleSheet.flatten([
    {
      height: sizes.buttonHeight,
      borderRadius: sizes.buttonRadius,
      borderWidth: sizes.buttonBorder,
      borderColor: colors.buttonBorder,
    },
    radius !== undefined && {borderRadius: radius},
    color !== undefined && {backgroundColor: color},
    align !== undefined && {alignItems: align},
    justify !== undefined && {justifyContent: justify},
    center !== undefined && {
      alignItems: 'center',
      justifyContent: 'center',
    },

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
  ]) as ViewStyle;

  return (
    <TouchableOpacity
      style={buttonStyle}
      activeOpacity={activeOpacity}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;
