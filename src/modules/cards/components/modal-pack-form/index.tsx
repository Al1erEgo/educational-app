import React from 'react'

import { Form } from 'antd'

import { ModalButtons, ModalFormCheckbox, ModalFormInput, ModalFormUpload } from '@/modules/cards/components'
import { MODAL_PACK_FORMAT } from '@/modules/cards/constants'
import { useCardsModalForm } from '@/modules/cards/hooks'
import { StyledModalWrapper } from '@/modules/cards/styles'
import { CardsModalBaseProps, ModalPackFormDataType, PacksModalPayloadType } from '@/modules/cards/types'

type ModalPackFormProps<T> = CardsModalBaseProps<T>

export const ModalPackForm = <T extends PacksModalPayloadType>({
  payload,
  onSubmit,
  onCancel,
}: ModalPackFormProps<T>) => {
  const { handleSubmit, control, errors, isDirty, setError } = useCardsModalForm<T, ModalPackFormDataType>(
    MODAL_PACK_FORMAT,
    payload
  )

  const handlePackSubmit = (inputData: ModalPackFormDataType) => {
    const submitData = {
      cardsPack: { ...payload.cardsPack, ...inputData },
    } as T

    onSubmit(submitData)
    onCancel()
  }

  const submitButtonName = payload.cardsPack && '_id' in payload.cardsPack ? 'Edit pack' : 'Add pack'

  return (
    <StyledModalWrapper>
      <Form onFinish={handleSubmit(handlePackSubmit)}>
        <ModalFormUpload name="Cover" control={control} error={errors.deckCover} setError={setError} />
        <ModalFormInput name={'Name'} control={control} error={errors.name} />

        <ModalFormCheckbox name="private" control={control} defaultValue={payload.cardsPack?.private || false} />

        <ModalButtons submitButtonName={submitButtonName} onCancel={onCancel} disabled={!isDirty} />
      </Form>
    </StyledModalWrapper>
  )
}
