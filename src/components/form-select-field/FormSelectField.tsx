import React, {useCallback, useRef} from 'react';
import {Platform, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import colors from '~/src/constants/colors';
import {ListItem} from '~/src/interfaces/UI';
import {BaseFormElement} from '../base-form-element/BaseFormElement';

interface Properties {
  label: string;
  placeholder?: string;
  value?: any;
  errorMessage?: string;
  onChange: (value: string) => void;
  iconName?: string;
  iconColor?: string;
  options: ListItem[];
  testID?: string;
}

export const FormSelectField: React.FC<Properties> = props => {
  const {value, onChange, errorMessage, options} = props;
  const ref = useRef<RNPickerSelect | null>();
  const onPress = useCallback(() => {
    ref.current?.togglePicker();
  }, [ref.current]);

  return (
    <BaseFormElement onPress={onPress} {...props}>
      <RNPickerSelect
        placeholder={''}
        onValueChange={val => onChange(val)}
        value={value}
        itemKey="value"
        ref={el => (ref.current = el)}
        style={{
          viewContainer: [
            styles.inputContainer,
            !!errorMessage && styles.inputContainerError,
          ] as any,
          inputAndroid: styles.inputAndroid,
          inputIOS: styles.inputIOS,
        }}
        items={options}
      />
    </BaseFormElement>
  );
};

const left = 10;
const styles = StyleSheet.create({
  inputContainerError: {
    borderColor: colors.placeholder,
    borderWidth: 1,
  },
  inputAndroid: {},
  inputIOS: {
    color: colors.primaryColor,
    fontSize: 14,
    left: Platform.select({android: left - 4, ios: left}),
    top: Platform.select({android: 0, ios: 10}),
    right: 10,
  },
  container: {
    marginTop: 20,
  },
  inputContainer: {},
});
