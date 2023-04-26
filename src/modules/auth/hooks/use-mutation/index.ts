import { redirect } from 'react-router-dom'

import { mutationAndPathByForm } from '../use-form-data/constants'

import { MutationType } from './types'
/**
A hook that returns a mutation trigger function and a form submission function for a given mutation type.
@param {MutationType} mutationType - A string representing the type of mutation.
@returns {Array} - An array containing a mutation trigger function and a form submission function.
*/

//TODO убрать any
export const useMutation = (mutationType: MutationType): any => {
  //Get mutation and path to redirect(if provided) from defined object by specified key
  const { mutation, path } = mutationAndPathByForm[mutationType]
  // Get mutation trigger and status using the useMutation hook
  const [trigger, { isLoading, isSuccess, error }] = mutation()
  // Define a form submission function that will trigger the mutation and navigate to a specified path (if provided)
  const onSubmit = async <T>(data?: T) => {
    try {
      await trigger(data).unwrap()
      if (path) redirect(path)
    } catch (e: unknown) {
      return
    }
  }

  return [onSubmit, { trigger, isLoading, isSuccess, error }]
}
