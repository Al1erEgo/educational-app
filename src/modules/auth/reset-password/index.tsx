import { Button, Form } from 'antd'

import { ErrorServerHandler } from '../../../components/error-handler/error-server-handler'
import { MAIN_PATH } from '../../../constants'
import { useRequestPasswordResetMutation } from '../api'
import { FormInput } from '../components/form-input'
import { AUTH_PATH } from '../constants'
import { useFormWithValidation, useSubmit } from '../hooks'
import { ResetPasswordFormInputs } from '../hooks/use-authform/types'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledP, StyledText } from '../styles'

import { CheckEmail } from './components/check-email'

export const ResetPassword = () => {
  const { handleSubmit, control, errors, watch } =
    useFormWithValidation<ResetPasswordFormInputs>('resetPassword')

  const [resetPassword, { isLoading, isSuccess, error }] = useRequestPasswordResetMutation()

  const onSubmit = useSubmit(resetPassword)

  if (isSuccess) {
    return <CheckEmail email={watch().email} />
  }

  return (
    <StyledCard title={'Forgot your password?'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <FormInput name="email" control={control} error={errors.email} />
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
