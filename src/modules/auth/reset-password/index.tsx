import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Form, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { MAIN_PATH } from '../../../constants'
import { useRequestPasswordResetMutation } from '../auth-api'
import { AUTH_PATH } from '../constants'
import {
  cardHeadStyle,
  StyledCard,
  StyledErrorText,
  StyledNavLink,
  StyledP,
  StyledText,
} from '../styles'

import { CheckEmail } from './check-email'

type ResetPasswordFormInputs = {
  email: string
  error?: string
}

const schema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required()

export const ResetPassword = () => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm<ResetPasswordFormInputs>({ resolver: yupResolver(schema) })
  const [resetPassword, { isLoading, isError, isSuccess }] = useRequestPasswordResetMutation()

  const onSubmit = async (data: ResetPasswordFormInputs) => {
    try {
      await resetPassword(data).unwrap()
    } catch (e: any) {
      if (e.data.error) {
        setError('error', {
          message: e.data.error,
        })
      }
    }
  }

  if (isSuccess) {
    return <CheckEmail />
  }

  return (
    <StyledCard title={'Forgot your password?'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          name="email"
          validateStatus={errors.email ? 'error' : ''}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} placeholder="Email" autoComplete="email" />}
          />
        </Form.Item>
        <StyledText type="secondary">
          Enter your email address and we will send you further instructions
        </StyledText>
        {isError && <StyledErrorText type="danger">{errors.error?.message}</StyledErrorText>}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={isLoading}
            style={{ fontWeight: '500' }}
            block
          >
            Send Instructions
          </Button>
        </Form.Item>
      </Form>
      <StyledP>Did you remember your password?</StyledP>

      <StyledNavLink to={`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`}>Try logging in</StyledNavLink>
    </StyledCard>
  )
}
