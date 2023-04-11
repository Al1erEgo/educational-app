import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Form } from 'antd'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { ErrorServerHandler } from '../../../components/error-handler/error-server-handler'
import { MAIN_PATH } from '../../../constants'
import { isFetchBaseQueryError } from '../../../utils'
import { useRequestPasswordResetMutation } from '../auth-api'
import { FormInput } from '../components/form-input'
import { AUTH_PATH } from '../constants'
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
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<ResetPasswordFormInputs>({
    resolver: yupResolver(schema),
  })
  const [resetPassword, { isLoading, isSuccess, error }] = useRequestPasswordResetMutation()
  const onSubmit = async (data: ResetPasswordFormInputs) => {
    try {
      await resetPassword(data).unwrap()
    } catch (e: unknown) {
      if (isFetchBaseQueryError(e)) {
        return e
      }
    }
  }

  if (isSuccess) {
    return <CheckEmail email={watch().email} />
  }

  return (
    <StyledCard title={'Forgot your password?'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <FormInput
          name="email"
          control={control}
          rules={{ required: true }}
          placeholder="Email"
          autoComplete="email"
          error={errors.email}
        />
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
