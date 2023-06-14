import { ModalCardFormDataType, ModalPackFormDataType } from '@/modules/cards/types'

export const getModalCardFormControllerName = (name: string, prefix: string = '', suffix: string = '') => {
  if (name === 'Question' || name === 'Answer') {
    return (name.toLowerCase() + suffix) as keyof ModalCardFormDataType
  }
  if (prefix) {
    return (prefix + name) as keyof ModalPackFormDataType
  }

  return (prefix + name.toLowerCase()) as keyof ModalPackFormDataType
}
