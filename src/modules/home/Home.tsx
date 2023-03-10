import React from 'react';
import {ScrollView, StyleSheet, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {resetSession} from '~/src/helpers/token';
import {useRxjs} from '~/src/hooks/useRxjs';
import {store} from '~/src/store/Store';
import {Screens} from '../../stacks/Screens';

export const Home = ({}: {}) => {
  const navigation = useNavigation<any>();

  const [session] = useRxjs(store.session);

  const logout = () => {
    resetSession();
    navigation.navigate('auth', {screen: Screens.Signin});
  };

  return (
    <ScrollView
      style={styles.wrapper}
      contentContainerStyle={{paddingBottom: 40}}>
      <Text>{JSON.stringify(session, null, 2)}</Text>
      <Button title="Logout" onPress={logout} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, padding: 15},
});
