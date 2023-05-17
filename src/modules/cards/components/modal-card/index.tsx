import React, { useState } from 'react'

import { UploadOutlined } from '@ant-design/icons'
import { Button, Form, Select, Upload, UploadFile } from 'antd'
import { RcFile, UploadChangeParam } from 'antd/es/upload'
import { Controller, ControllerRenderProps } from 'react-hook-form'
import { FieldValues } from 'react-hook-form/dist/types'

import { SELECT_OPTIONS } from '../../constants/pack-modals'
import { useModalForm } from '../../hooks'
import { StyledModalWrapper } from '../../styles'
import {
  ModalCardFormat,
  ModalCardFormType,
  PackModalBaseType,
  PackModalCardPayloadType,
} from '../../types/pack-modals'
import { getBase64 } from '../../utils'
import { ModalButtons } from '../modal-buttons'
import { ModalFormInput } from '../modal-form-input'

type HandleChangeType = <T extends keyof ModalCardFormType>(
  event: UploadChangeParam<UploadFile<any>>,
  field: ControllerRenderProps<FieldValues, T>
) => void

export const ModalCard = <T extends PackModalCardPayloadType>({
  payload,
  onSubmit,
  onCancel,
}: PackModalBaseType<T>) => {
  const cardFormatInitStateType =
    payload.card.questionImg || payload.card.answerImg
      ? ModalCardFormat.IMG
      : ModalCardFormat.TEXT

  const [format, setFormat] = useState<ModalCardFormat>(cardFormatInitStateType)

  const { handleSubmit, control, errors, isDirty, setError, watch } =
    useModalForm<T, ModalCardFormType>(format, payload)

  const handleCardSubmit = (inputData: ModalCardFormType) => {
    const submitData = {
      card: { ...payload.card, ...inputData },
    } as T

    onSubmit(submitData)
    onCancel()
  }

  const handleChange: HandleChangeType = async (
    { fileList: newFileList },
    { name, onChange }
  ) => {
    if (newFileList[0]?.originFileObj) {
      const file = newFileList[0].originFileObj as RcFile

      if (file.size < 4000000) {
        const url = await getBase64(file)

        onChange(url)
      } else {
        setError(name, {
          type: 'manual',
          message: 'Size of picture too large',
        })
      }
    } else {
      onChange('')
    }
  }

  //Button name depends on usage of ModalCard and type of payload
  const submitButtonName =
    'cardsPack_id' in payload.card ? 'Add card' : 'Edit card'

  return (
    <StyledModalWrapper>
      <p>Question format:</p>
      <Select
        style={{ width: '100%' }} //StyledComponent usage brakes down onChange
        defaultValue={format}
        onChange={setFormat}
        options={SELECT_OPTIONS}
      />
      {/*TODO выделить форму в отдельный компонент*/}
      <Form.Item
        validateStatus={errors.questionImg ? 'error' : ''}
        help={errors?.questionImg?.message}
      >
        <p>Question Img:</p>
        <Controller
          name={'questionImg'}
          control={control}
          render={({ field }) => (
            <Upload
              defaultFileList={[{ url: field.value }]}
              maxCount={1}
              accept="image/*"
              listType="picture"
              onChange={e => handleChange(e, field)}
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Upload question</Button>
            </Upload>
          )}
        />
      </Form.Item>
      <Form.Item
        validateStatus={errors.answerImg ? 'error' : ''}
        help={errors?.answerImg?.message}
      >
        <p>Answer Img:</p>
        <Controller
          name={'answerImg'}
          control={control}
          render={({ field }) => (
            <Upload
              maxCount={1}
              accept="image/*"
              listType="picture"
              onChange={e => handleChange(e, field)}
              beforeUpload={() => false}
            >
              <Button icon={<UploadOutlined />}>Upload question</Button>
            </Upload>
          )}
        />
      </Form.Item>
      <Form onFinish={handleSubmit(handleCardSubmit)}>
        <ModalFormInput
          name={'Question'}
          control={control}
          error={errors.question}
        />
        <ModalFormInput
          name={'Answer'}
          control={control}
          error={errors.answer}
        />
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
