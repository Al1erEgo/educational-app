import { Form } from 'antd'

import { ErrorServerHandler } from '../../../../components'
import { FormButton, FormInput, FormCheckbox } from '../../components'
import { ABSOLUTE_AUTH_PATH } from '../../constants'
import { useFormData } from '../../hooks'
import { LoginFormInputs } from '../../hooks/use-authform/types'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledP } from '../../styles'

import { ForgotPasswordLink } from './styles'

export const SignIn = () => {
  const [onSubmit, { handleSubmit, control, errors }, { isLoading, error }] =
    useFormData<LoginFormInputs>('login')

  console.log(errors)

  return (
    <StyledCard title={'Sign In'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <FormInput name="email" control={control} error={errors.email} />
        <FormInput name="password" control={control} error={errors.password} />
        <FormCheckbox name="rememberMe" control={control} />
        <ForgotPasswordLink to={ABSOLUTE_AUTH_PATH.ResetPassword}>
          Forgot password?
        </ForgotPasswordLink>

        <ErrorServerHandler error={error} />

        <FormButton loading={isLoading}>Sign In</FormButton>
      </Form>
      <StyledP>Have no account?</StyledP>

      <StyledNavLink to={ABSOLUTE_AUTH_PATH.SignUp}>Sign Up</StyledNavLink>
    </StyledCard>
  )
}
