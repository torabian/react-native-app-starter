import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Formik, FormikHelpers, FormikProps} from 'formik';
import React, {useRef} from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';
import {useMutation} from 'react-query';
import {ErrorsView} from '~/src/components/error-view/ErrorView';
import colors from '~/src/constants/colors';
import t from '~/src/constants/t';
import {execApi, mutationErrorsToFormik} from '~/src/helpers/api';
import {saveCredentials} from '~/src/helpers/auth';
import {setSession} from '~/src/helpers/token';
import {BasicUserAuthForm, LoginFormResponse} from '~/src/interfaces/Auth';
import {FormButton} from '../../components/form-button/FormButton';
import {Screens} from '../../stacks/Screens';
import {CommonScrollForm, EmailInput, PasswordInput} from './AuthComponents';
import {useRememberingLoginForm} from './AuthHooks';

const initialValues: BasicUserAuthForm = {
  email: '',
  password: '',
};

export const Signin = () => {
  const formik = useRef<FormikProps<BasicUserAuthForm> | null>();
  const passwordRef = useRef<TextInput | null>();
  const {RememberSwitch} = useRememberingLoginForm(formik);
  const navigation = useNavigation<NavigationProp<any>>();

  const mutation = useMutation<LoginFormResponse, unknown, BasicUserAuthForm>(
    content => {
      return execApi('post', 'auth/user/signin', content);
    },
  );

  const onSubmit = (
    values: BasicUserAuthForm,
    formikProps: FormikHelpers<BasicUserAuthForm>,
  ) => {
    mutation.mutate(values, {
      onSuccess(response) {
        if (response.data) {
          setSession(response.data.item);
          saveCredentials(values);
          navigation.navigate('app', {screen: Screens.Home});
        }
      },
      onError(error: any) {
        formikProps.setErrors(mutationErrorsToFormik(error));
      },
    });
  };

  return (
    <CommonScrollForm title={'Sign-in to \nyour account'}>
      <Formik
        innerRef={p => {
          if (p) formik.current = p;
        }}
        initialValues={initialValues}
        onSubmit={onSubmit}>
        {(formik: FormikProps<BasicUserAuthForm>) => {
          return (
            <>
              <ErrorsView errors={formik.errors} />
              <EmailInput
                formik={formik}
                onSubmitEditing={() => {
                  passwordRef.current?.focus();
                }}
              />
              <PasswordInput
                formik={formik}
                getInputRef={r => (passwordRef.current = r)}
                onSubmitEditing={() => {
                  formik.submitForm();
                }}
              />

              <RememberSwitch />

              <FormButton
                isSubmitting={mutation.isLoading}
                onPress={() => formik.submitForm()}
                style={styles.submit}
                label={t.loginButton}
              />
              <Text
                style={{
                  color: colors.darkBackground,
                  textAlign: 'center',
                  marginHorizontal: 10,
                }}>
                {t.firstTime}
              </Text>
              <FormButton
                type="secondary"
                onPress={() => {
                  navigation.navigate('auth', {screen: Screens.Signup});
                }}
                label={t.createAccount}
              />
            </>
          );
        }}
      </Formik>
    </CommonScrollForm>
  );
};

const styles = StyleSheet.create({
  submit: {
    marginTop: 30,
  },
});
