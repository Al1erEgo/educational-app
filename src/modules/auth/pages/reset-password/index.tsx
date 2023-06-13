import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from 'antd'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { ErrorMessageHandler } from '@/components'
import { useRequestPasswordResetMutation } from '@/modules/auth/api'
import { ConfirmationMessage, FormButton, FormInput } from '@/modules/auth/components'
import { ABSOLUTE_AUTH_PATH, emailSchema } from '@/modules/auth/constants'
import { StyledCard, StyledNavLink, StyledP, StyledText } from '@/modules/auth/styles'
import { ResetPasswordFormInputs } from '@/modules/auth/types'

export const ResetPassword = () => {
  const [onSubmit, { isLoading, isSuccess, error }] = useRequestPasswordResetMutation()

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<ResetPasswordFormInputs>({
    mode: 'all',
    resolver: yupResolver(
      yup.object<ResetPasswordFormInputs, any>({
        email: emailSchema,
      })
    ),
  })

  if (isSuccess) {
    return <ConfirmationMessage variant={'resetPassword'} email={watch().email} />
  }

  return (
    <StyledCard title={'Forgot your password?'}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <FormInput name="email" control={control} error={errors.email} />
        <StyledText type="secondary">Enter your email address and we will send you further instructions</StyledText>

        <ErrorMessageHandler serverError={error} />

        <FormButton loading={isLoading}>Send Instructions</FormButton>
      </Form>
      <StyledP>Did you remember your password?</StyledP>

      <StyledNavLink to={ABSOLUTE_AUTH_PATH.SignIn}>Try logging in</StyledNavLink>
    </StyledCard>
  )
}
