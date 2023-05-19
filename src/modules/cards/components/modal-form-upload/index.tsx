import React, { FC } from 'react'

import { UploadOutlined } from '@ant-design/icons'
import { Button, Form, Upload, UploadFile } from 'antd'
import { RcFile, UploadChangeParam } from 'antd/es/upload'
import {
  Control,
  Controller,
  ControllerRenderProps,
  UseFormSetError,
} from 'react-hook-form'
import { FieldValues } from 'react-hook-form/dist/types'

import { usePreview } from '../../hooks'
import { ModalCardFormDataType } from '../../types'
import { getBase64, getModalFormControllerName } from '../../utils'

type ModalFormUploadType = {
  name: string
  control: Control
  error?: any
  setError: UseFormSetError<ModalCardFormDataType>
}

type HandleUploadChangeType = <T extends keyof ModalCardFormDataType>(
  event: UploadChangeParam<UploadFile<any>>,
  field: ControllerRenderProps<FieldValues, T>
) => void

export const ModalFormUpload: FC<ModalFormUploadType> = ({
  name,
  control,
  error,
  setError,
}) => {
  const { preview, handlePreview } = usePreview()

  const uploadControllerName = getModalFormControllerName(name, 'Img')

  const getDefaultImage = (img: string): UploadFile<any>[] => {
    if (img) {
      return [{ url: img } as UploadFile<any>]
    } else {
      return []
    }
  }

  const handleUploadChange: HandleUploadChangeType = async (
    { fileList: newFileList },
    { name, onChange }
  ) => {
    if (newFileList[0]?.originFileObj) {
      const file = newFileList[0].originFileObj as RcFile

      if (file.size < 570000) {
        const url = await getBase64(file)

        onChange(url)
      } else {
        newFileList[0].status = 'error'
        setError(name, {
          type: 'manual',
          message: 'Size of picture too large',
        })
      }
    } else {
      onChange('')
    }
  }

  return (
    <Form.Item validateStatus={error ? 'error' : ''} help={error?.message}>
      <p>{name}:</p>
      <Controller
        name={uploadControllerName}
        control={control}
        render={({ field }) => (
          <Upload
            defaultFileList={getDefaultImage(field.value)}
            maxCount={1}
            accept="image/*"
            listType="picture"
            onChange={e => handleUploadChange(e, field)}
            onPreview={() => handlePreview(field.value)}
            beforeUpload={() => false}
          >
            {!field.value && (
              <Button icon={<UploadOutlined />}>Upload {name} image</Button>
            )}
          </Upload>
        )}
      />
      {preview}
    </Form.Item>
  )
}
