import {Formik, FormikHelpers, FormikProps} from 'formik';
import React, {useEffect, useRef} from 'react';

import {StyleSheet, View} from 'react-native';
import {useMutation, useQueryClient} from 'react-query';
import {FormButton} from '~/components/form-button/FormButton';
import t from '~/constants/t';
import {mutationErrorsToFormik} from '~/helpers/api';
import {BookDto} from './BookDto';
import {BookEditForm} from './BookEditForm';
import {BookEntityValidator} from './BookEntityValidator';
import {BooksInteractionPool} from './BookInteractionPool';

export const BookEntity = ({
  data,
  fnClose,
}: {
  data?: BookDto.DTO | null;
  fnClose: () => void;
}) => {
  const isEditingMode = !!data;
  const formik = useRef<FormikProps<BookDto.DTO> | null>();
  const queryClient = useQueryClient();
  const mutation = useMutation<BookDto.DTO, unknown, BookDto.DTO>(content => {
    if (!isEditingMode) {
      return BooksInteractionPool.create(content);
    }
    return BooksInteractionPool.update(content);
  });

  /**
   * Do not use 'data' in the hook callback. We do not want if the data is changed,
   * the form which user is changing to be changed, or lost. In such event,
   * we need to inform user and ask for next correct step, either save as draft.
   */
  useEffect(() => {
    if (data) {
      formik.current?.setValues(data);
    }
  }, []);

  const fnUpdater = (items: BookDto.DTO[] | undefined, item: BookDto.DTO) => {
    if (isEditingMode) {
      return (items || []).map(t => (BookDto.isEqual(t, item) ? item : t));
    }

    return [item, ...(items || [])];
  };

  const onSubmit = (
    values: BookDto.DTO,
    formikProps: FormikHelpers<BookDto.DTO>,
  ) => {
    mutation.mutate(values, {
      onSuccess(response) {
        queryClient.setQueryData<BookDto.DTO[]>('Books', items =>
          fnUpdater(items, response),
        );
        fnClose();
      },

      onError(error: any) {
        formikProps.setErrors(mutationErrorsToFormik(error));
      },
    });
  };

  useEffect(() => {
    formik.current?.setSubmitting(mutation.isLoading);
  }, [mutation.isLoading]);

  return (
    <View style={styles.wrapper}>
      <Formik
        innerRef={p => {
          if (p) formik.current = p;
        }}
        validationSchema={BookEntityValidator}
        initialValues={BookDto.Empty}
        onSubmit={onSubmit}>
        {(form: FormikProps<BookDto.DTO>) => {
          return (
            <>
              <BookEditForm form={form} />
              <FormButton
                isSubmitting={form.isSubmitting}
                onPress={() => form.submitForm()}
                style={styles.submit}
                label={t.save}
              />
            </>
          );
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  submit: {
    marginTop: 30,
  },
});
