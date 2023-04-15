import { Checkbox, Form } from 'antd'
import { Controller } from 'react-hook-form'

import { ErrorServerHandler } from '../../../components/error-handler/error-server-handler'
import { MAIN_PATH } from '../../../constants'
import { useLoginMutation } from '../api'
import { FormButton, FormInput } from '../components'
import { AUTH_PATH } from '../constants'
import { useFormWithValidation, useSubmit } from '../hooks'
import { LoginFormInputs } from '../hooks/use-authform/types'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledP } from '../styles'

import { ForgotPasswordLink } from './styles'

export const SignIn = () => {
  const { handleSubmit, control, errors } = useFormWithValidation<LoginFormInputs>('login')
  const [login, { isLoading, error }] = useLoginMutation()
  const onSubmit = useSubmit(login, `${MAIN_PATH.Root}`)

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
