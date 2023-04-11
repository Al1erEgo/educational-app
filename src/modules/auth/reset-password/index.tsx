import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Form, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { ErrorServerHandler } from '../../../components/error-handler/error-server-handler'
import { MAIN_PATH } from '../../../constants'
import { useRequestPasswordResetMutation } from '../auth-api'
import { AUTH_PATH } from '../constants'
import { useSubmit } from '../hooks/use-submit'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledP, StyledText } from '../styles'

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
  const { handleSubmit, control, formState, watch } = useForm<ResetPasswordFormInputs>({
    resolver: yupResolver(schema),
  })
  const [resetPassword, { isLoading, isSuccess, error }] = useRequestPasswordResetMutation()
  const onSubmit = useSubmit(resetPassword)

  if (isSuccess) {
    return <CheckEmail email={watch().email} />
  }

  return (
    <StyledCard title={'Forgot your password?'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          name="email"
          validateStatus={formState.errors.email ? 'error' : ''}
          help={formState.errors.email?.message}
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
            Send Instructions
          </Button>
        </Form.Item>
      </Form>
      <StyledP>Did you remember your password?</StyledP>

      <StyledNavLink to={`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`}>Try logging in</StyledNavLink>
    </StyledCard>
  )
}
