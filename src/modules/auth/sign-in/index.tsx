import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Checkbox, Form } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { ErrorServerHandler } from '../../../components/error-handler/error-server-handler'
import { MAIN_PATH } from '../../../constants'
import { isFetchBaseQueryError } from '../../../utils'
import { useLoginMutation } from '../auth-api'
import { FormInput } from '../components/form-input'
import { AUTH_PATH, inputs } from '../constants'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledP } from '../styles'

import { ForgotPasswordLink } from './styles'

export type LoginFormInputs = {
  email: string
  password: string
  rememberMe: boolean
  error?: string
}

const loginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    rememberMe: yup.boolean(),
  })
  .required()

export const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  })

  const [login, { isLoading, error }] = useLoginMutation()
  const navigate = useNavigate()

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      await login(data).unwrap()
      navigate(`${MAIN_PATH.Root}`)
    } catch (e: unknown) {
      if (isFetchBaseQueryError(e)) {
        return e
      }
    }
  }

  return (
    <StyledCard title={'Sign In'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(onSubmit)}>
        {Object.values(inputs).map(
          ({ name, controlName, type, rules, placeholder, autoComplete }) =>
            (name === 'email' || name === 'password') && (
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

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={isLoading}
            style={{ fontWeight: '500' }}
            block
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
      <StyledP>Have no account?</StyledP>

      <StyledNavLink to={`${MAIN_PATH.Auth}${AUTH_PATH.SignUp}`}>Sign Up</StyledNavLink>
    </StyledCard>
  )
}
