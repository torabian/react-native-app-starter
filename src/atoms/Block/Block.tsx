import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';

interface Props extends ViewProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  flex?: ViewStyle['flex'];
  color?: ViewStyle['backgroundColor'];
  radius?: ViewStyle['borderRadius'];
  align?: ViewStyle['alignItems'];
  justify?: ViewStyle['justifyContent'];
  row?: boolean;

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

const Block = ({
  children,
  style,
  flex,
  color,
  radius,
  align,
  justify,
  row,
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
  const blockStyle = StyleSheet.flatten([
    flex !== undefined && {flex: flex},
    row !== undefined && {flexDirection: 'row'},
    color !== undefined && {backgroundColor: color},
    radius !== undefined && {borderRadius: radius},
    align !== undefined && {alignItems: align},
    justify !== undefined && {justifyContent: justify},

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
    <View style={blockStyle} {...props}>
      {children}
    </View>
  );
};

export default Block;
