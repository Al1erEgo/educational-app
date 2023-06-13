import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from 'antd'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { ErrorMessageHandler } from '@/components'
import { useRegisterMutation } from '@/modules/auth/api'
import { ConfirmationMessage, FormButton, FormInput } from '@/modules/auth/components'
import { ABSOLUTE_AUTH_PATH, confirmPasswordSchema, emailSchema, passwordSchema } from '@/modules/auth/constants'
import { StyledCard, StyledNavLink, StyledP } from '@/modules/auth/styles'
import { SignUpFormInputs } from '@/modules/auth/types'

export const SignUp = () => {
  const [onSubmit, { isLoading, isSuccess, error }] = useRegisterMutation()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormInputs>({
    mode: 'all',
    resolver: yupResolver(
      yup.object<SignUpFormInputs, any>({
        email: emailSchema,
        password: passwordSchema,
        'confirm password': confirmPasswordSchema,
      })
    ),
  })

  if (isSuccess) {
    return <ConfirmationMessage variant={'signUp'} />
  }

  return (
    <StyledCard title={'Sign Up'}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <FormInput name="email" control={control} error={errors.email} />
        <FormInput name="password" control={control} error={errors.password} />
        <FormInput name="confirm password" control={control} error={errors['confirm password']} />
        <ErrorMessageHandler serverError={error} />
        <FormButton loading={isLoading}>Sign Up</FormButton>
      </Form>
      <StyledP>Already have an account?</StyledP>
      <StyledNavLink to={ABSOLUTE_AUTH_PATH.SignIn}>Sign In</StyledNavLink>
    </StyledCard>
  )
}
