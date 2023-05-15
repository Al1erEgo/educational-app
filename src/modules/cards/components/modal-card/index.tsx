import React, { useState } from 'react'

import { UploadOutlined } from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Form, Select, Upload, UploadProps } from 'antd'
import { RcFile } from 'antd/es/upload'
import { UploadRequestOption } from 'rc-upload/lib/interface'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { getBase64 } from '../../../auth/utils'
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

const schema = yup.object({
  question: yup.string().min(1).max(1000).required(),
  answer: yup.string().min(1).max(1000).required(),
})

export const ModalCard = <T extends PackModalCardPayloadType>({
  payload,
  onSubmit,
  onCancel,
}: PackModalBaseType<T>) => {
  const cardFormatStateType =
    payload.card.questionImg || payload.card.answerImg ? 'picture' : 'text'

  const [format, setFormat] = useState<ModalCardFormatType>(cardFormatStateType)
  const [cardPictures, setCardPictures] = useState<ModalCardPictureType>({
    questionImg: payload.card.questionImg,
    answerImg: payload.card.answerImg,
  })

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors, isDirty },
  } = useForm<ModalCardFormType>({
    defaultValues: {
      question: payload?.card.question || '',
      answer: payload?.card.answer || '',
    },
    resolver: yupResolver(schema),
    mode: 'all',
  })

  const handleCardSubmit = (
    inputData: ModalCardFormType | ModalCardPictureType
  ) => {
    const submitData = {
      card: { ...payload.card, ...inputData },
    } as T

    onSubmit(submitData)
    onCancel()
  }

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    console.log(newFileList)
    if (newFileList[0].originFileObj) {
      const file = newFileList[0].originFileObj as RcFile

      if (file.size < 4000000) {
        getBase64(file, url => {
          setCardPictures(prevState => ({ ...prevState, questionImg: url }))
        })
        newFileList[0].status = 'success'
      } else {
        console.error('Error: ', 'Файл слишком большого размера')
      }
    }
  }

  const uploadHandler = (action: UploadRequestOption) => {
    if (action.file) {
      const file = action.file as RcFile

      if (file.size < 4000000) {
        getBase64(file, url => {
          setCardPictures(prevState => ({ ...prevState, questionImg: url }))
        })
      } else {
        console.error('Error: ', 'Файл слишком большого размера')
      }
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
      <Upload
        showUploadList={true}
        accept="image/*"
        listType="picture"
        onChange={handleChange}
      >
        <Button icon={<UploadOutlined />}>Upload question</Button>
      </Upload>
      <Upload
        showUploadList={true}
        accept="image/*"
        listType="picture"
        onChange={handleChange}
        customRequest={uploadHandler}
      >
        <Button icon={<UploadOutlined />}>Upload answer</Button>
      </Upload>
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
