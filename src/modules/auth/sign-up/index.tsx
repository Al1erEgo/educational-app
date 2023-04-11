import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Form } from 'antd'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { ErrorServerHandler } from '../../../components/error-handler/error-server-handler'
import { MAIN_PATH } from '../../../constants'
import { useRegisterMutation } from '../auth-api'
import { FormInput } from '../components/form-input'
import { AUTH_PATH } from '../constants'
import { useSubmit } from '../hooks/use-submit'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledP } from '../styles'

export type SignUpFormInputs = {
  email: string
  password: string
  'confirm password': string
  error?: string
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    'confirm password': yup
      .string()
      .min(8)
      .required()
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value
      }),
  })
  .required()

export const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormInputs>({ mode: 'onBlur', resolver: yupResolver(schema) })
  const [registerUser, { isLoading, error }] = useRegisterMutation()

  const onSubmit = useSubmit(registerUser, `${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)

  return (
    <StyledCard title={'Sign Up'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <FormInput
          name="email"
          control={control}
          rules={{ required: true }}
          placeholder="Email"
          autoComplete="email"
          error={errors.email}
        />

        <FormInput
          name="password"
          type="password"
          control={control}
          rules={{ required: true }}
          placeholder="Password"
          autoComplete="new-password"
          error={errors.password}
        />

        <FormInput
          name="confirm password"
          type="password"
          control={control}
          rules={{ required: true }}
          placeholder="Confirm password"
          autoComplete="new-password"
          error={errors['confirm password']}
        />

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
