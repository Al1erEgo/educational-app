import { Form } from 'antd'

import { ErrorServerHandler } from '../../../components/error-server-handler/error-server-handler'
import { MAIN_PATH } from '../../../constants'
import { FormButton, FormInput } from '../components'
import { AUTH_PATH } from '../constants'
import { useFormData } from '../hooks/use-form-data'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledP, StyledText } from '../styles'

import { CheckEmail } from './components/check-email'

export const ResetPassword = () => {
  const [{ handleSubmit, control, errors, watch }, { isLoading, isSuccess, error }, onSubmit] =
    useFormData('resetPassword')

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

        <FormButton loading={isLoading}>Send Instructions</FormButton>
      </Form>
      <StyledP>Did you remember your password?</StyledP>

      <StyledNavLink to={`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`}>Try logging in</StyledNavLink>
    </StyledCard>
  )
}
