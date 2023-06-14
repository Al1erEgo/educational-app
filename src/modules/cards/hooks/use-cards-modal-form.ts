import { yupResolver } from '@hookform/resolvers/yup'
import { DeepPartial, useForm } from 'react-hook-form'

import { modalSchemaMap } from '@/modules/cards/constants'
import {
  CardsModalPayloadType,
  ModalCardFormDataType,
  ModalCardsFormat,
  ModalPackFormDataType,
} from '@/modules/cards/types'
import { getDefaultModalFormValues } from '@/modules/cards/utils'

export const useCardsModalForm = <
  T extends CardsModalPayloadType,
  D extends ModalCardFormDataType | ModalPackFormDataType
>(
  formType: ModalCardsFormat,
  payload: T
) => {
  const schema = modalSchemaMap[formType]

  const defaultValues = getDefaultModalFormValues<T>(formType, payload) as DeepPartial<D>

  const {
    handleSubmit,
    control,
    formState: { errors, isDirty },
    setError,
    watch,
  } = useForm<D>({
    mode: 'all',
    resolver: yupResolver<D>(schema),
    defaultValues,
  })

  return { handleSubmit, control, errors, isDirty, setError, watch }
}
