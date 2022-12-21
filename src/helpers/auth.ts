import AsyncStorage from '@react-native-async-storage/async-storage';
import {BasicUserAuthForm} from '~/src/interfaces/Auth';

export const saveCredentials = (values: BasicUserAuthForm) => {
  Promise.resolve(
    AsyncStorage.setItem(
      'credentials',
      JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    ),
  );
};
