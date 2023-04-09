import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Form, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'

import { isFetchBaseQueryError } from '../../../utils'
import { useSetNewPasswordMutation } from '../auth-api'
import { AUTH_PATH } from '../constants'
import { cardHeadStyle, StyledCard, StyledText } from '../styles'

type NewPasswordFormInputs = {
  password: string
  error?: string
}

const newPasswordSchema = yup
  .object({
    password: yup.string().min(8).required(),
  })
  .required()

export const NewPassword = () => {
  const [newPassword, { isLoading }] = useSetNewPasswordMutation()

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<NewPasswordFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(newPasswordSchema),
  })

  const { resetPasswordToken } = useParams()
  const navigate = useNavigate()

  const onSubmit = async (data: NewPasswordFormInputs) => {
    try {
      if (!resetPasswordToken) {
        setError('error', { message: 'Something wrong with token' })

        return
      }
      const payload = { password: data.password, resetPasswordToken }

      await newPassword(payload).unwrap()
      navigate(`${AUTH_PATH.SignIn}`)
    } catch (e: unknown) {
      if (isFetchBaseQueryError(e)) {
        setError('error', { message: e.data.error })
      }
    }
  }

  return (
    <StyledCard title={'Create new Password'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          name="password"
          validateStatus={errors.password ? 'error' : ''}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input.Password {...field} placeholder="Password" autoComplete="password" />
            )}
          />
        </Form.Item>
        <StyledText type="secondary">
          Create new password and we will send you further instructions to email
        </StyledText>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={isLoading}
            style={{ fontWeight: '500' }}
            block
          >
            Create new Password
          </Button>
        </Form.Item>
      </Form>
    </StyledCard>
  )
}
