import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from 'antd'
import { useForm } from 'react-hook-form'
import { redirect } from 'react-router-dom'
import * as yup from 'yup'

import { StyledForgotPasswordLink } from './styles'

import { ErrorMessage } from '@/components'
import { MAIN_PATH } from '@/constants'
import { useLoginMutation } from '@/modules/auth/api'
import { FormButton, FormCheckbox, FormInput } from '@/modules/auth/components'
import { AUTH_PATH, emailSchema, passwordSchema, rememberMeSchema } from '@/modules/auth/constants'
import { StyledCard, StyledNavLink, StyledP } from '@/modules/auth/styles'
import { LoginFormInputs, LoginRequestType } from '@/modules/auth/types'

export const SignIn = () => {
  const [trigger, { isLoading, error }] = useLoginMutation()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    mode: 'all',
    resolver: yupResolver(
      yup.object<LoginFormInputs, any>({
        email: emailSchema,
        password: passwordSchema,
        rememberMe: rememberMeSchema,
      })
    ),
  })

  const onSubmit = async (data: LoginRequestType) => {
    await trigger(data).unwrap()
    redirect(MAIN_PATH.Root)
  }

  return (
    <StyledCard title={'Sign In'}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <FormInput name="email" control={control} error={errors.email} />
        <FormInput name="password" control={control} error={errors.password} />
        <FormCheckbox name="rememberMe" control={control} defaultValue={false} />
        <StyledForgotPasswordLink to={`${MAIN_PATH.Auth}${AUTH_PATH.ResetPassword}`}>
          Forgot password?
        </StyledForgotPasswordLink>

        <ErrorMessage serverError={error} />

        <FormButton loading={isLoading}>Sign In</FormButton>
      </Form>
      <StyledP>Have no account?</StyledP>

      <StyledNavLink to={`${MAIN_PATH.Auth}${AUTH_PATH.SignUp}`}>Sign Up</StyledNavLink>
    </StyledCard>
  )
}
