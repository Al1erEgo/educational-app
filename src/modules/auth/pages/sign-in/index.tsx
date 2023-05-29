import { Form } from 'antd'

import { StyledForgotPasswordLink } from './styles'

import { ErrorMessageHandler } from '@/components'
import { FormButton, FormCheckbox, FormInput } from '@/modules/auth/components'
import { ABSOLUTE_AUTH_PATH } from '@/modules/auth/constants'
import { useFormData } from '@/modules/auth/hooks'
import { StyledCard, StyledNavLink, StyledP } from '@/modules/auth/styles'
import { LoginFormInputs } from '@/modules/auth/types'

export const SignIn = () => {
  const [onSubmit, { handleSubmit, control, errors }, { isLoading, error }] =
    useFormData<LoginFormInputs>('login')

  return (
    <StyledCard title={'Sign In'}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <FormInput name="email" control={control} error={errors.email} />
        <FormInput name="password" control={control} error={errors.password} />
        <FormCheckbox
          name="rememberMe"
          control={control}
          defaultValue={false}
        />
        <StyledForgotPasswordLink to={ABSOLUTE_AUTH_PATH.ResetPassword}>
          Forgot password?
        </StyledForgotPasswordLink>

        <ErrorMessageHandler serverError={error} />

        <FormButton loading={isLoading}>Sign In</FormButton>
      </Form>
      <StyledP>Have no account?</StyledP>

      <StyledNavLink to={ABSOLUTE_AUTH_PATH.SignUp}>Sign Up</StyledNavLink>
    </StyledCard>
  )
}
