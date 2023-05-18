import React, { useState } from 'react'

import { UploadOutlined } from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Checkbox, Form, Select, Upload } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { SELECT_OPTIONS } from '../../constants/pack-modals'
import { StyledModalWrapper } from '../../styles'
import {
  ModalPackFormatType,
  ModalPackFormType,
  ModalPackPictureType,
  PacksModalBaseType,
  PacksModalPayloadType,
} from '../../types'
import { ModalButtons, ModalFormInput } from '../index'

const schema = yup.object({
  name: yup.string().min(1).max(100).required(),
})

export const ModalPack = <T extends PacksModalPayloadType>({
  payload,
  onSubmit,
  onCancel,
}: PacksModalBaseType<T>) => {
  const packFormatStateType = payload.cardsPack.deckCover ? 'picture' : 'text'

  const [format, setFormat] = useState<ModalPackFormatType>(packFormatStateType)
  const [cardPictures, setCardPictures] = useState<ModalPackPictureType>({
    name: payload.cardsPack.name,
    deckCover: payload.cardsPack.deckCover,
  })

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors, isDirty },
  } = useForm<ModalPackFormType>({
    defaultValues: {
      name: payload.cardsPack.name || '',
      deckCover: payload.cardsPack.deckCover || '',
      private: payload.cardsPack.private || false,
    },
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const handleCardSubmit = (inputData: ModalPackFormType) => {
    const submitData = {
      cardsPack: { ...payload.cardsPack, ...inputData },
    } as T

    onSubmit(submitData)
    onCancel()
  }

  const submitButtonName = '_id' in payload.cardsPack ? 'Edit pack' : 'Add pack'

  return (
    <StyledModalWrapper>
      <Select
        style={{ width: '100%' }}
        defaultValue={format}
        onChange={setFormat}
        options={SELECT_OPTIONS}
      />
      <Upload
        showUploadList={false}
        accept="image/*"
        //customRequest={uploadHandler}
      >
        <Button icon={<UploadOutlined />}>Upload cover</Button>
      </Upload>

      <Form onFinish={handleSubmit(handleCardSubmit)}>
        <ModalFormInput name="Name" control={control} error={errors.name} />

        <Form.Item>
          <Controller
            name="private"
            control={control}
            defaultValue={payload.cardsPack.private || false}
            render={({ field }) => (
              <Checkbox
                {...field}
                checked={field.value}
                onChange={e => field.onChange(e.target.checked)}
              >
                Private Pack
              </Checkbox>
            )}
          />
        </Form.Item>

        <Form.Item>
          <ModalButtons
            submitButtonName={submitButtonName}
            onCancel={onCancel}
            disabled={!isDirty}
          />
        </Form.Item>
      </Form>
    </StyledModalWrapper>
  )
}
