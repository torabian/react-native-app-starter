import * as Yup from 'yup';
import t from '~/src/constants/t';
import {CarFilterValidator} from './CarFilterValidator';

export const CarEntityValidator = CarFilterValidator.clone().concat(
  Yup.object({
    name: Yup.string().required(t.formValidation.fieldNecessary),
    miles_per_gallon: Yup.string().required(t.formValidation.fieldNecessary),
    cylinders: Yup.number().required(t.formValidation.fieldNecessary),
    displacement: Yup.string().required(t.formValidation.fieldNecessary),
  }),
);
