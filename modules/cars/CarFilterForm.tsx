import {FormikProps} from 'formik';
import React from 'react';

import {CarDto} from './CarDto';
import {CarEditForm} from './CarEditForm';

/**
 * Filter form is used to do the search inside the list.
 * By default, we are using the same for create/edit because in simple forms
 * it's quite enough to query the fields. For more complex filters, copy the content of
 * the edit form, and extend it on your own.
 */
export const CarFilterForm = ({form}: {form: FormikProps<CarDto.DTO>}) => {
  return <CarEditForm form={form} />;
};
