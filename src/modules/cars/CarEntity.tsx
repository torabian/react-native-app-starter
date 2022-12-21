import {Formik, FormikHelpers, FormikProps} from 'formik';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {useMutation, useQueryClient} from 'react-query';
import {FormButton} from '~/src/components/form-button/FormButton';
import t from '~/src/constants/t';
import {mutationErrorsToFormik} from '~/src/helpers/api';
import {CarDto} from './CarDto';
import {CarEditForm} from './CarEditForm';
import {CarEntityValidator} from './CarEntityValidator';
import {CarsInteractionPool} from './CarInteractionPool';

export const CarEntity = ({
  data,
  fnClose,
}: {
  data?: CarDto.DTO | null;
  fnClose: () => void;
}) => {
  const isEditingMode = !!data;
  const formik = useRef<FormikProps<CarDto.DTO> | null>();
  const queryClient = useQueryClient();
  const mutation = useMutation<CarDto.DTO, unknown, CarDto.DTO>(content => {
    if (!isEditingMode) {
      return CarsInteractionPool.create(content);
    }
    return CarsInteractionPool.update(content);
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

  const fnUpdater = (items: CarDto.DTO[] | undefined, item: CarDto.DTO) => {
    if (isEditingMode) {
      return (items || []).map(t => (CarDto.isEqual(t, item) ? item : t));
    }

    return [item, ...(items || [])];
  };

  const onSubmit = (
    values: CarDto.DTO,
    formikProps: FormikHelpers<CarDto.DTO>,
  ) => {
    mutation.mutate(values, {
      onSuccess(response) {
        queryClient.setQueryData<CarDto.DTO[]>('Cars', items =>
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
          if (p) {
            formik.current = p;
          }
        }}
        validationSchema={CarEntityValidator}
        initialValues={CarDto.Empty}
        onSubmit={onSubmit}>
        {(form: FormikProps<CarDto.DTO>) => {
          return (
            <>
              <CarEditForm form={form} />
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
