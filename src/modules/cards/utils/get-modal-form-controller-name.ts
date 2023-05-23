import { ModalCardFormDataType, ModalPackFormDataType } from '../types'

export const getModalCardFormControllerName = (
  name: string,
  suffix: string = ''
) => (name.toLowerCase() + suffix) as keyof ModalCardFormDataType

export const getModalPackFormControllerName = (prefix = '', name: string) =>
  (prefix + name) as keyof ModalPackFormDataType
