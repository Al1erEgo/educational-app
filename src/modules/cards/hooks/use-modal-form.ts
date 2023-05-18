import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { modalSchemaMap } from '../constants'
import {
  ModalCardFormat,
  ModalCardFormDataType,
  PackModalCardPayloadType,
} from '../types/pack-modals'
import { getDefaultModalFormValues } from '../utils'

export const useModalForm = <
  T extends PackModalCardPayloadType,
  D extends ModalCardFormDataType
>(
  formType: ModalCardFormat,
  payload: T
) => {
  const schema = modalSchemaMap[formType]
  const defaultValues = getDefaultModalFormValues<T>(formType, payload)

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
    setError,
    watch,
  } = useForm<ModalCardFormDataType>({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues,
  })

  return { handleSubmit, control, errors, isDirty, setError, watch }
}
