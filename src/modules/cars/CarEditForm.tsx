import {FormikProps} from 'formik';
import React from 'react';
import {FormText} from '~/src/components/form-text/FormText';
import {CarDto} from './CarDto';

export const CarEditForm = ({form}: {form: FormikProps<CarDto.DTO>}) => {
  const {values, setFieldValue, errors} = form;

  return (
    <>
      <FormText
        value={values.name || ''}
        label={'Name'}
        onChange={value => setFieldValue('name', value)}
        errorMessage={errors.name}
        autoCapitalize={'none'}
        autoCorrect={false}
        returnKeyType="next"
        blurOnSubmit={false}
      />
      <FormText
        value={values.miles_per_gallon || ''}
        label={'Miles_per_Gallon'}
        onChange={value => setFieldValue('miles_per_gallon', value)}
        errorMessage={errors.miles_per_gallon}
        autoCapitalize={'none'}
        autoCorrect={false}
        returnKeyType="next"
        blurOnSubmit={false}
      />
      <FormText
        value={values.cylinders ? `${values.cylinders}` : ''}
        label={'Cylinders'}
        onChange={value => setFieldValue('cylinders', value)}
        errorMessage={errors.cylinders}
        autoCapitalize={'none'}
        autoCorrect={false}
        returnKeyType="next"
        blurOnSubmit={false}
      />
      <FormText
        value={values.displacement || ''}
        label={'Displacement'}
        onChange={value => setFieldValue('displacement', value)}
        errorMessage={errors.displacement}
        autoCapitalize={'none'}
        autoCorrect={false}
        returnKeyType="next"
        blurOnSubmit={false}
      />
      <FormText
        value={values.horsepower || ''}
        label={'Horsepower'}
        onChange={value => setFieldValue('horsepower', value)}
        errorMessage={errors.horsepower}
        autoCapitalize={'none'}
        autoCorrect={false}
        returnKeyType="next"
        blurOnSubmit={false}
      />
      <FormText
        value={values.weight_in_lbs || ''}
        label={'Weight_in_lbs'}
        onChange={value => setFieldValue('weight_in_lbs', value)}
        errorMessage={errors.weight_in_lbs}
        autoCapitalize={'none'}
        autoCorrect={false}
        returnKeyType="next"
        blurOnSubmit={false}
      />
      <FormText
        value={values.acceleration || ''}
        label={'Acceleration'}
        onChange={value => setFieldValue('acceleration', value)}
        errorMessage={errors.acceleration}
        autoCapitalize={'none'}
        autoCorrect={false}
        returnKeyType="next"
        blurOnSubmit={false}
      />
      <FormText
        value={values.year || ''}
        label={'Year'}
        onChange={value => setFieldValue('year', value)}
        errorMessage={errors.year}
        autoCapitalize={'none'}
        autoCorrect={false}
        returnKeyType="next"
        blurOnSubmit={false}
      />
      <FormText
        value={values.origin || ''}
        label={'Origin'}
        onChange={value => setFieldValue('origin', value)}
        errorMessage={errors.origin}
        autoCapitalize={'none'}
        autoCorrect={false}
        returnKeyType="next"
        blurOnSubmit={false}
      />
    </>
  );
};
