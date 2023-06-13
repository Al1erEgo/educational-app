import { useFormWithValidation } from './use-authform'

import { useAuthMutation } from '@/modules/auth/hooks/use-auth-mutation'
import { FormInputsTypes, FormType } from '@/modules/auth/types'

//TODO убрать any
/**
 A hook that returns the necessary form data and functions required for form submission and validation.
 @template T - The type of form data.
 @param {FormType} formType - A string representing the type of form.
 @returns {Array} - An array containing the necessary form data and functions required for form submission and
 validation.
 */
export const useFormData = <T extends FormInputsTypes>(
  formType: FormType
): any => {
  const { handleSubmit, control, setError, errors, watch, setValue } =
    useFormWithValidation<T>(formType)
  const [onSubmit, { trigger, isLoading, isSuccess, error }] =
    useAuthMutation(formType)

  return [
    onSubmit,
    { handleSubmit, control, setError, errors, watch, setValue },
    { trigger, isLoading, isSuccess, error },
  ]
}
