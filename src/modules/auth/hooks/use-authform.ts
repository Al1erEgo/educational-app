import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm } from 'react-hook-form'

import { formSchemaMap } from '@/modules/auth/constants'
import { FormType } from '@/modules/auth/types'

/**
 * A hook that provides form validation functionality using Yup schema.
 *
 * @template T - The type of form values.
 * @param {FormType} formType - String, which represents variant of the form.
 * @returns {Object} An object containing form validation functions and state.
 * @property {Function} handleSubmit - A function to handle form submission.
 * @property {Object} control - The form control object.
 * @property {Object} errors - The validation errors object.
 * @property {Function} setError - A function to manually set validation errors.
 * @property {Function} watch - A function to watch form field values.
 * @property {Function} setValue - A function to set form field values.
 */
export const useFormWithValidation = <T extends FieldValues>(
  formType: FormType
) => {
  const schema = formSchemaMap[formType]
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
    watch,
    setValue,
  } = useForm<T>({
    mode: 'all',
    resolver: yupResolver(schema),
  })

  return { handleSubmit, control, errors, setError, watch, setValue }
}
