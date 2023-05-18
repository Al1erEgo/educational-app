import { ModalCardFormDataType } from '../types'

export const getModalFormControllerName = (name: string, suffix: string = '') =>
  (name.toLowerCase() + suffix) as keyof ModalCardFormDataType
