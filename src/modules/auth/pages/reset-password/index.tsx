import { Form } from 'antd'

import { ErrorMessageHandler } from '@/components'
import {
  ConfirmationMessage,
  FormButton,
  FormInput,
} from '@/modules/auth/components'
import { ABSOLUTE_AUTH_PATH } from '@/modules/auth/constants'
import { useFormData } from '@/modules/auth/hooks'
import {
  StyledCard,
  StyledNavLink,
  StyledP,
  StyledText,
} from '@/modules/auth/styles'
import { ResetPasswordFormInputs } from '@/modules/auth/types'

export const ResetPassword = () => {
  const [
    onSubmit,
    { handleSubmit, watch, control, errors },
    { isLoading, isSuccess, error },
  ] = useFormData<ResetPasswordFormInputs>('resetPassword')

  if (isSuccess) {
    return (
      <ConfirmationMessage variant={'resetPassword'} email={watch().email} />
    )
  }

  return (
    <StyledCard title={'Forgot your password?'}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <FormInput name="email" control={control} error={errors.email} />
        <StyledText type="secondary">
          Enter your email address and we will send you further instructions
        </StyledText>

        <ErrorMessageHandler serverError={error} />

        <FormButton loading={isLoading}>Send Instructions</FormButton>
      </Form>
      <StyledP>Did you remember your password?</StyledP>

      <StyledNavLink to={ABSOLUTE_AUTH_PATH.SignIn}>
        Try logging in
      </StyledNavLink>
    </StyledCard>
  )
}
