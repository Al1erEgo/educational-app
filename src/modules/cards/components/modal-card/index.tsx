import React, { useState } from 'react'

import { UploadOutlined } from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Form, Select, Upload, UploadFile, UploadProps } from 'antd'
import { RcFile, UploadChangeParam } from 'antd/es/upload'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { SELECT_OPTIONS } from '../../constants/pack-modals'
import { StyledModalWrapper } from '../../styles'
import {
  ModalCardFormatType,
  ModalCardFormType,
  ModalCardPictureType,
  PackModalBaseType,
  PackModalCardPayloadType,
} from '../../types/pack-modals'
import { ModalButtons } from '../modal-buttons'
import { ModalFormInput } from '../modal-form-input'

type HandleChange2Type = (
  event: UploadChangeParam<UploadFile<any>>,
  fieldName: keyof ModalCardFormType,
  onChange: (...event: any[]) => void
) => void

const textSchema = yup.object({
  // question: yup.string().min(1).max(1000).required(),
  // answer: yup.string().min(1).max(1000).required(),
  question: yup.string(),
  answer: yup.string(),
})
const imgSchema = yup.object({
  questionImg: yup.string().required(),
  answerImg: yup.string().required(),
})

const getBase64 = (file: RcFile): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = error => reject(error)
  })

export const ModalCard = <T extends PackModalCardPayloadType>({
  payload,
  onSubmit,
  onCancel,
}: PackModalBaseType<T>) => {
  const cardFormatInitStateType =
    payload.card.questionImg || payload.card.answerImg ? 'img' : 'text'

  const [format, setFormat] = useState<ModalCardFormatType>(
    cardFormatInitStateType
  )

  const schema = format === 'img' ? imgSchema : textSchema

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    setError,
    formState: { errors, isDirty },
  } = useForm<ModalCardFormType>({
    defaultValues: {
      question: payload?.card.question || '',
      answer: payload?.card.answer || '',
      questionImg: payload?.card.questionImg || '',
      answerImg: payload?.card.answerImg || '',
    },
    resolver: yupResolver(imgSchema),
    mode: 'all',
  })

  console.log('watch', watch())

  const handleCardSubmit = (
    inputData: ModalCardFormType & ModalCardPictureType
  ) => {
    const submitData = {
      card: { ...payload.card, ...inputData },
    } as T

    onSubmit(submitData)
    onCancel()
  }

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    if (newFileList[0]?.originFileObj) {
      const file = newFileList[0].originFileObj as RcFile

      if (file.size < 4000000) {
        const url = getBase64(file)

        newFileList[0].status = 'success'

        return url
      } else {
        console.error('Error: ', 'Файл слишком большого размера')
      }
    } else {
      return ''
    }
  }

  const handleChange2: HandleChange2Type = async (
    { fileList: newFileList },
    fieldName,
    onChange
  ) => {
    if (newFileList[0]?.originFileObj) {
      const file = newFileList[0].originFileObj as RcFile

      if (file.size < 4000000) {
        const url = getBase64(file)

        newFileList[0].status = 'success'

        onChange(url)
      } else {
        setError(fieldName, {
          type: 'custom',
          message: 'Файл слишком большого размера',
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
              showUploadList={true}
              accept="image/*"
              listType="picture"
              onChange={async e => {
                const file = await handleChange(e)

                field.onChange(file)
              }}
              //onRemove={() => setValue(field.name, '')}
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
              showUploadList={true}
              accept="image/*"
              listType="picture"
              onChange={async e => {
                const file = await handleChange(e)

                field.onChange(file)
              }}
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
