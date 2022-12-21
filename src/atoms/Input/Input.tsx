import React, {memo, ReactNode} from 'react';
import {
  TextInput,
  TextInputProps,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';

import {useTheme} from '../../hooks/useTheme';

interface Props extends TextInputProps {
  children?: ReactNode;
  style?: StyleProp<TextStyle>;

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

const Input = ({
  children,
  style,
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
  placeholderTextColor,
  ...props
}: Props) => {
  const {colors, sizes} = useTheme();

  const inputStyle = StyleSheet.flatten([
    {
      height: sizes.inputHeight,
      borderRadius: sizes.inputRadius,
      borderWidth: sizes.inputBorder,
      borderColor: colors.inputBorder,
      paddingHorizontal: sizes.base,
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
  ]);

  return (
    <TextInput
      style={inputStyle}
      placeholderTextColor={placeholderTextColor || colors.inputBorder}
      {...props}>
      {children}
    </TextInput>
  );
};

Input.whyDidYouRender = true;

export default memo(Input);
