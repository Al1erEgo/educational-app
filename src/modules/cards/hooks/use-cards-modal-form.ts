import { yupResolver } from '@hookform/resolvers/yup'
import { DeepPartial, useForm } from 'react-hook-form'

import { modalSchemaMap } from '../constants'
import {
  CardsModalPayloadType,
  ModalCardFormDataType,
  ModalCardsFormat,
  ModalPackFormDataType,
} from '../types'
import { getDefaultModalFormValues } from '../utils'

export const useCardsModalForm = <
  T extends CardsModalPayloadType,
  D extends ModalCardFormDataType | ModalPackFormDataType
>(
  formType: ModalCardsFormat,
  payload: T
) => {
  const schema = modalSchemaMap[formType]

  const defaultValues = getDefaultModalFormValues<T, D>(
    formType,
    payload
  ) as DeepPartial<D>

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
    setError,
    watch,
  } = useForm<D>({
    mode: 'all',
    resolver: yupResolver(schema),
    defaultValues,
  })

  return { handleSubmit, control, errors, isDirty, setError, watch }
}
