import * as Yup from 'yup';
import t from '~/src/constants/t';
import {BookFilterValidator} from './BookFilterValidator';

export const BookEntityValidator = BookFilterValidator.clone().concat(
  // @meta(entityvalidator)
  Yup.object({
    title: Yup.string().required(t.formValidation.fieldNeccessary),
    country: Yup.string().required(t.formValidation.fieldNeccessary),
  }),
);
