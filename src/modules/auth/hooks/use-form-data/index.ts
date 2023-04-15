import { FieldValues } from 'react-hook-form'

import { useFormWithValidation } from '../use-authform'
import { FormType } from '../use-authform/types'
import { useSubmit } from '../use-submit'

import { mutationAndPathByForm } from './constants'

/**
A hook that returns the necessary form data and functions required for form submission and validation.
@template T - The type of form data.
@param {FormType} formType - A string representing the type of form.
@returns {Array} - An array containing the necessary form data and functions required for form submission and validation.
*/
export const useFormData = <T extends FieldValues>(formType: FormType): any => {
  const { mutation, path } = mutationAndPathByForm[formType]
  // Get necessary form data and functions using the useFormWithValidation hook
  const { handleSubmit, control, setError, errors, watch } = useFormWithValidation<T>(formType)
  // Get mutation trigger and status using the useMutation hook
  const [trigger, { isLoading, isSuccess, error }] = mutation()
  // Get form submission function using the useSubmit hook
  const onSubmit = useSubmit(trigger, path)

  return [
    { handleSubmit, control, setError, errors, watch },
    { trigger, isLoading, isSuccess, error },
    onSubmit,
  ]
}
