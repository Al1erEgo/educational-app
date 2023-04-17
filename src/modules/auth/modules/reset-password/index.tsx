import { Form } from 'antd'

import { ErrorServerHandler } from '../../../../components'
import { FormButton, FormInput } from '../../components'
import { ABSOLUTE_AUTH_PATH } from '../../constants'
import { ResetPasswordFormInputs } from '../../hooks/use-authform/types'
import { useFormData } from '../../hooks/use-form-data'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledP, StyledText } from '../../styles'

import { CheckEmail } from './components/check-email'

export const ResetPassword = () => {
  const [onSubmit, { handleSubmit, control, errors, watch }, { isLoading, isSuccess, error }] =
    useFormData<ResetPasswordFormInputs>('resetPassword')

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

      <StyledNavLink to={ABSOLUTE_AUTH_PATH.SignIn}>Try logging in</StyledNavLink>
    </StyledCard>
  )
}
