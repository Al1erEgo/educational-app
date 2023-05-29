import React, { FC, useEffect } from 'react'

import { CloseOutlined } from '@ant-design/icons'
import { Form } from 'antd'

import { useFormData } from '../../hooks'
import { UpdateUserNameType } from '../../types'
import { FormInput } from '../form-input'
import {
  StyledCheckOutlined,
  StyledProfileNameCloseButton,
  StyledProfileNameSubmitButton,
  StyledSpaceCompactProfileName,
} from '../profile-name/styles'

import { ProfileNameBaseType } from '@/modules/auth/types/profile-name'

export const ProfileNameInput: FC<ProfileNameBaseType> = ({
  userName,
  switchEdit,
}) => {
  const [onSubmit, { handleSubmit, control, errors, setValue }] =
    useFormData<UpdateUserNameType>('updateUserName')

  const handleNameSubmit = () => {
    switchEdit()
    setValue('name', userName)
  }

  const validateStatus = errors.name && 'error'

  useEffect(() => setValue('name', userName), [])

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Form.Item validateStatus={validateStatus} help={errors.name?.message}>
        <StyledSpaceCompactProfileName>
          <FormInput name="name" control={control} />
          <StyledProfileNameCloseButton onClick={handleNameSubmit}>
            <CloseOutlined />
          </StyledProfileNameCloseButton>
          <StyledProfileNameSubmitButton>
            <StyledCheckOutlined />
          </StyledProfileNameSubmitButton>
        </StyledSpaceCompactProfileName>
      </Form.Item>
    </Form>
  )
}
