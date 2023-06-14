import React, { FC, useState } from 'react'

import { CloseOutlined } from '@ant-design/icons'
import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from 'antd'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { useAuthMeUpdateMutation } from '@/modules/auth/api'
import { FormInput } from '@/modules/auth/components'
import {
  StyledCheckOutlined,
  StyledProfileNameCloseButton,
  StyledProfileNameSubmitButton,
  StyledProfileNameWrapper,
  StyledSpaceCompactProfileName,
} from '@/modules/auth/components/editable-profile-name/styles'
import { StyledUserName } from '@/modules/auth/components/profile-widget/styles'
import { nameSchema } from '@/modules/auth/constants'
import { UpdateUserNameType } from '@/modules/auth/types'
import { ProfileNameBaseProps } from '@/modules/auth/types/profile-name'

type EditableProfileNameProps = Omit<ProfileNameBaseProps, 'switchEdit'>

export const EditableProfileName: FC<EditableProfileNameProps> = ({ userName }) => {
  const [isEdit, setIsEdit] = useState(false)
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
    setIsEdit(false)
    userName && setValue('name', userName)
  }

  if (isEdit) {
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

  return (
    <StyledProfileNameWrapper>
      <StyledUserName fontSize={'big'} wordbreak={'break-all'} border={'none'} onClick={() => setIsEdit(true)}>
        {userName}
      </StyledUserName>
    </StyledProfileNameWrapper>
  )
}
