import { Checkbox, Form } from 'antd'
import { Controller } from 'react-hook-form'

import { ErrorServerHandler } from '../../../components/error-server-handler/error-server-handler'
import { MAIN_PATH } from '../../../constants'
import { FormButton, FormInput } from '../components'
import { AUTH_PATH } from '../constants'
import { LoginFormInputs } from '../hooks/use-authform/types'
import { useFormData } from '../hooks/use-form-data'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledP } from '../styles'

import { ForgotPasswordLink } from './styles'

export const SignIn = () => {
  const [{ handleSubmit, control, errors }, { isLoading, error }, onSubmit] =
    useFormData<LoginFormInputs>('login')

  return (
    <StyledCard title={'Sign In'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <FormInput name="email" control={control} error={errors.email} />
        <FormInput name="password" control={control} error={errors.password} />
        <Form.Item
          name="rememberMe"
          valuePropName="checked"
          wrapperCol={{
            offset: 0,
            span: 16,
          }}
        >
          <Controller
            name="rememberMe"
            control={control}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value}>
                Remember me
              </Checkbox>
            )}
          />
        </Form.Item>
        <ForgotPasswordLink to={`${MAIN_PATH.Auth}${AUTH_PATH.ResetPassword}`}>
          Forgot password?
        </ForgotPasswordLink>

        <ErrorServerHandler error={error} />

        <FormButton loading={isLoading}>Sign In</FormButton>
      </Form>
      <StyledP>Have no account?</StyledP>

      <StyledNavLink to={`${MAIN_PATH.Auth}${AUTH_PATH.SignUp}`}>Sign Up</StyledNavLink>
    </StyledCard>
  )
}
