import { FieldValues } from 'react-hook-form'

import { useFormWithValidation } from '../use-authform'
import { FormType } from '../use-authform/types'
import { useMutation } from '../use-mutation'

/**
A hook that returns the necessary form data and functions required for form submission and validation.
@template T - The type of form data.
@param {FormType} formType - A string representing the type of form.
@returns {Array} - An array containing the necessary form data and functions required for form submission and validation.
*/
export const useFormData = <T extends FieldValues>(formType: FormType): any => {
  // Get necessary form data and functions using the useFormWithValidation hook
  const { handleSubmit, control, setError, errors, watch, setValue } =
    useFormWithValidation<T>(formType)
  // Get mutation trigger and status using the useMutation hook
  const [onSubmit, { trigger, isLoading, isSuccess, error }] = useMutation(formType)

  return [
    onSubmit,
    { handleSubmit, control, setError, errors, watch, setValue },
    { trigger, isLoading, isSuccess, error },
  ]
}
