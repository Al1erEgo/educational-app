import { FieldValues } from 'react-hook-form'

import { useAuthMutation, UseMutationReturnType } from './use-auth-mutation'
import { useFormWithValidation } from './use-authform'

import { FormType } from '@/modules/auth/types'

//TODO type

type UseFormDataType = <T extends FieldValues>(
  formType: FormType
) => UseMutationReturnType<T>

/**
 A hook that returns the necessary form data and functions required for form submission and validation.
 @template T - The type of form data.
 @param {FormType} formType - A string representing the type of form.
 @returns {Array} - An array containing the necessary form data and functions required for form submission and
    validation.
 */
export const useFormData = <T extends FieldValues>(formType: FormType): any => {
  // Get necessary form data and functions using the useFormWithValidation hook
  const { handleSubmit, control, setError, errors, watch, setValue } =
    useFormWithValidation<T>(formType)
  // Get mutation trigger and status using the useMutation hook
  const [onSubmit, { trigger, isLoading, isSuccess, error }] =
    useAuthMutation(formType)

  return [
    onSubmit,
    { handleSubmit, control, setError, errors, watch, setValue },
    { trigger, isLoading, isSuccess, error },
  ]
}
