import React, { FC } from 'react'

import { CloseOutlined } from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from 'antd'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { UpdateUserNameType } from '../../types'
import { FormInput } from '../form-input'
import {
  StyledCheckOutlined,
  StyledProfileNameCloseButton,
  StyledProfileNameSubmitButton,
  StyledSpaceCompactProfileName,
} from '../profile-name/styles'

import { useAuthMeUpdateMutation } from '@/modules/auth/api'
import { nameSchema } from '@/modules/auth/constants'
import { ProfileNameBaseType } from '@/modules/auth/types/profile-name'

export const ProfileNameInput: FC<ProfileNameBaseType> = ({ userName, switchEdit }) => {
  const [onSubmit] = useAuthMeUpdateMutation()

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<UpdateUserNameType>({
    mode: 'all',
    defaultValues: {
      name: userName,
    },
    resolver: yupResolver(
      yup.object<UpdateUserNameType, any>({
        name: nameSchema,
      })
    ),
  })

  const handleNameSubmit = () => {
    switchEdit()
    userName && setValue('name', userName)
  }

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Form.Item validateStatus={errors.name && 'error'} help={errors.name?.message}>
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
