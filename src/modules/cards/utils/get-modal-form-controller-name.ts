import { ModalCardFormType } from '../types/pack-modals'

export const getModalFormControllerName = (name: string, suffix: string = '') =>
  (name.toLowerCase() + suffix) as keyof ModalCardFormType
