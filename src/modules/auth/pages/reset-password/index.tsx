import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from 'antd'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import checkEmailImage from '@/assets/check-email-image.svg'
import { ErrorMessage } from '@/components'
import { MAIN_PATH } from '@/constants'
import { useRequestPasswordResetMutation } from '@/modules/auth/api'
import { ConfirmationMessage, FormButton, FormInput } from '@/modules/auth/components'
import { AUTH_PATH, emailSchema } from '@/modules/auth/constants'
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
    return (
      <ConfirmationMessage
        title={'Check Email'}
        text={'We’ve sent an Email with instructions to'}
        redirectPath={`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`}
        image={checkEmailImage}
        email={watch().email}
      />
    )
  }

  return (
    <StyledCard title={'Forgot your password?'}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <FormInput name="email" control={control} error={errors.email} />
        <StyledText type="secondary">Enter your email address and we will send you further instructions</StyledText>

        <ErrorMessage serverError={error} />

        <FormButton loading={isLoading}>Send Instructions</FormButton>
      </Form>
      <StyledP>Did you remember your password?</StyledP>

      <StyledNavLink to={`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`}>Try logging in</StyledNavLink>
    </StyledCard>
  )
}
