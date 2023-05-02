import { Form } from 'antd'

import { ErrorServerHandler } from '../../../../components'
import { FormButton, FormInput, FormCheckbox } from '../../components'
import { ABSOLUTE_AUTH_PATH } from '../../constants'
import { useFormData } from '../../hooks'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledP } from '../../styles'
import { LoginFormInputs } from '../../types'

import { StyledForgotPasswordLink } from './styles'

export const SignIn = () => {
  const [onSubmit, { handleSubmit, control, errors }, { isLoading, error }] =
    useFormData<LoginFormInputs>('login')

  return (
    <StyledCard title={'Sign In'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <FormInput name="email" control={control} error={errors.email} />
        <FormInput name="password" control={control} error={errors.password} />
        <FormCheckbox name="rememberMe" control={control} />
        <StyledForgotPasswordLink to={ABSOLUTE_AUTH_PATH.ResetPassword}>
          Forgot password?
        </StyledForgotPasswordLink>

        <ErrorServerHandler error={error} />

        <FormButton loading={isLoading}>Sign In</FormButton>
      </Form>
      <StyledP>Have no account?</StyledP>

      <StyledNavLink to={ABSOLUTE_AUTH_PATH.SignUp}>Sign Up</StyledNavLink>
    </StyledCard>
  )
}
