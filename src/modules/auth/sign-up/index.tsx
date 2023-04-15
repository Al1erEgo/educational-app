import { Button, Form } from 'antd'

import { ErrorServerHandler } from '../../../components/error-handler/error-server-handler'
import { MAIN_PATH } from '../../../constants'
import { useRegisterMutation } from '../auth-api'
import { FormInput } from '../components/form-input'
import { AUTH_PATH, inputs } from '../constants'
import { useFormWithValidation } from '../hooks'
import { SignUpFormInputs } from '../hooks/use-authform/types'
import { useSubmit } from '../hooks/use-submit'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledP } from '../styles'

export const SignUp = () => {
  const { handleSubmit, control, errors } = useFormWithValidation<SignUpFormInputs>('signup')

  const [registerUser, { isLoading, error }] = useRegisterMutation()

  const onSubmit = useSubmit(registerUser, `${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)

  return (
    <StyledCard title={'Sign Up'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(onSubmit)}>
        {Object.values(inputs).map(
          ({ name, controlName, type, rules, placeholder, autoComplete }) =>
            (name === 'email' || name === 'password' || name === 'confirm password') && (
              <FormInput
                key={name}
                name={name}
                type={type}
                control={control}
                rules={rules}
                placeholder={placeholder}
                autoComplete={autoComplete}
                error={errors[controlName]}
              />
            )
        )}

        <ErrorServerHandler error={error} />

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={isLoading}
            style={{ fontWeight: '500' }}
            block
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>

      <StyledP>Already have an account?</StyledP>

      <StyledNavLink to={`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`}>Sign In</StyledNavLink>
    </StyledCard>
  )
}
