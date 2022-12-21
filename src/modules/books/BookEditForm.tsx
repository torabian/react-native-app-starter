import {FormikProps} from 'formik';
import React from 'react';
import {FormDate} from '~/src/components/form-date/FormDate';
import {FormSelectField} from '~/src/components/form-select-field/FormSelectField';
import {FormSwitch} from '~/src/components/form-switch/FormSwitch';

import {FormText} from '~/src/components/form-text/FormText';
import {colorsList} from '~/src/helpers/mockLists';
import {BookDto} from './BookDto';

export const BookEditForm = ({form}: {form: FormikProps<BookDto.DTO>}) => {
  const {values, setFieldValue, errors} = form;

  return (
    <>
      {/* @meta(as:string,name:title,label:Title) */}
      <FormText
        value={values.title || ''}
        label={'Title'}
        onChange={value => setFieldValue('title', value)}
        errorMessage={errors.title}
        autoCapitalize={'none'}
        autoCorrect={false}
        returnKeyType="next"
        blurOnSubmit={false}
      />

      <FormText
        value={values.country || ''}
        label={'Country'}
        onChange={value => setFieldValue('country', value)}
        errorMessage={errors.country}
        autoCapitalize={'none'}
        autoCorrect={false}
        returnKeyType="next"
        blurOnSubmit={false}
      />

      {/* @meta(as:select) */}
      <FormSelectField
        label="Color"
        onChange={value => setFieldValue('coverColor', value)}
        options={colorsList}
        value={values.coverColor || ''}
      />

      {/* @meta(as:switch) */}
      <FormSwitch
        label="Allow underage access"
        onChange={value => setFieldValue('underAgeAccess', value)}
        value={values.underAgeAccess}
      />

      {/* @meta(as:datepicker) */}
      <FormDate
        label="First release date"
        onChange={value => setFieldValue('firstReleaseDate', value)}
        value={values.firstReleaseDate}
      />

      <FormText
        value={values.author || ''}
        label={'Author'}
        onChange={value => setFieldValue('author', value)}
        errorMessage={errors.author}
        autoCapitalize={'none'}
        autoCorrect={false}
        returnKeyType="next"
        blurOnSubmit={false}
      />
      {/* @meta(as:number,name:year,label:Year) */}
      <FormText
        value={values.year ? `${values.year}` : ''}
        label={'Year'}
        onChange={value => setFieldValue('year', value)}
        errorMessage={errors.year}
        autoCapitalize={'none'}
        autoCorrect={false}
        returnKeyType="next"
        blurOnSubmit={false}
      />
    </>
  );
};
