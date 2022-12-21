import React from 'react';
import {View, StyleSheet} from 'react-native';
import {PageTitle} from '~/src/components/page-title/PageTitle';

export const UserSettingsScreen = ({}: {}) => {
  return (
    <View style={styles.wrapper}>
      <PageTitle title="User Settings" />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});
