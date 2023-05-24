import React, { Dispatch, FC, SetStateAction, useEffect } from 'react'

import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { Form, Space } from 'antd'

import { useFormData } from '../../../hooks'
import { UpdateUserNameType } from '../../../types'
import { FormInput } from '../../form-input'
import { StyledProfileNameButton } from '../styles'

type ProfileNameInputType = {
  userName: string
  callback: Dispatch<SetStateAction<boolean>>
}

export const ProfileNameInput: FC<ProfileNameInputType> = ({ userName, callback }) => {
  const [onSubmit, { handleSubmit, control, errors, setValue }] =
    useFormData<UpdateUserNameType>('updateUserName')

  const editNameSubmit = () => {
    callback(false)
    setValue('name', userName)
  }

  useEffect(() => setValue('name', userName), [])

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Form.Item validateStatus={errors.name ? 'error' : ''} help={errors.name?.message}>
        <Space.Compact style={{ width: '250px', height: '30px', marginBottom: '25px' }}>
          <FormInput name="name" control={control} />
          <StyledProfileNameButton onClick={editNameSubmit} danger>
            <CloseOutlined />
          </StyledProfileNameButton>
          <StyledProfileNameButton htmlType={'submit'} style={{ border: '1px solid #1677ff' }}>
            <Space>
              <CheckOutlined style={{ color: 'blue' }} />
            </Space>
          </StyledProfileNameButton>
        </Space.Compact>
      </Form.Item>
    </Form>
  )
}
