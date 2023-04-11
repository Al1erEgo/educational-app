import React from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Form } from 'antd'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import * as yup from 'yup'

import { ErrorServerHandler } from '../../../components/error-handler/error-server-handler'
import { MAIN_PATH } from '../../../constants'
import { isFetchBaseQueryError } from '../../../utils'
import { useSetNewPasswordMutation } from '../auth-api'
import { FormInput } from '../components/form-input'
import { AUTH_PATH } from '../constants'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledText } from '../styles'

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
  const [newPassword, { isLoading, error }] = useSetNewPasswordMutation()

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<NewPasswordFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(newPasswordSchema),
  })

  const { token } = useParams()
  const navigate = useNavigate()

  const onSubmit = async (data: NewPasswordFormInputs) => {
    try {
      if (!token) {
        setError('error', { message: 'Something wrong with token' })

        return
      }
      const payload = { password: data.password, resetPasswordToken: token }

      await newPassword(payload).unwrap()
      navigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)
    } catch (e: unknown) {
      if (isFetchBaseQueryError(e)) {
        setError('error', { message: e.data.error })
      }
    }
  }

  return (
    <StyledCard title={'Create new Password'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <FormInput
          name="password"
          type="password"
          control={control}
          rules={{ required: true }}
          placeholder="Password"
          autoComplete="new-password"
          error={errors.password}
        />
        <StyledText type="secondary">
          Create new password and we will send you further instructions to email
        </StyledText>
        <ErrorServerHandler error={error} />
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
      <StyledNavLink to={`${MAIN_PATH.Auth}${AUTH_PATH.ResetPassword}`}>
        Back to Send Email form
      </StyledNavLink>
    </StyledCard>
  )
}
