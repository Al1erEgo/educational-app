import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Form, Input, Typography } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { MAIN_PATH } from '../../../constants'
import { useRequestPasswordResetMutation } from '../auth-api'
import { AUTH_PATH } from '../constants'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledP, StyledText } from '../styles'

export const { Text } = Typography

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
  const [resetPassword, { isLoading, isError }] = useRequestPasswordResetMutation()

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

  return (
    <StyledCard title={'Forgot your password?'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <Form.Item name="email">
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input {...field} status={errors.email ? 'error' : ''} placeholder="Email" />
            )}
          />
        </Form.Item>
        {errors.email && <Text type="danger">{errors.email.message}</Text>}
        <StyledText type="secondary">
          Enter your email address and we will send you further instructions
        </StyledText>
        {isError && <Text type="danger">{errors.error?.message}</Text>}
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
