import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Form, Input, Typography } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { MAIN_PATH } from '../../../constants'
import { isFetchBaseQueryError } from '../../../utils'
import { useRegisterMutation } from '../auth-api'
import { AUTH_PATH } from '../constants'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledP } from '../styles'

type SignUpFormInputs = {
  email: string
  password: string
  'confirm password': string
  error?: string
}

const { Text } = Typography

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    'confirm password': yup
      .string()
      .min(6)
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
    setError,
    formState: { errors },
  } = useForm<SignUpFormInputs>({ resolver: yupResolver(schema) })
  const [registerUser, { isLoading, isError }] = useRegisterMutation()
  const navigate = useNavigate()

  const onSubmit = async (data: SignUpFormInputs) => {
    try {
      await registerUser(data).unwrap()
      navigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)
    } catch (e: unknown) {
      if (isFetchBaseQueryError(e)) {
        setError('error', { message: e.data.error })
      }
    }
  }

  return (
    <StyledCard title={'Sign Up'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <Form.Item name="email">
          <>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  {...field}
                  status={errors.email ? 'error' : ''}
                  placeholder="Email"
                  autoComplete="email"
                />
              )}
            />
            {errors.email && <Text type="danger">{errors.email.message}</Text>}
          </>
        </Form.Item>

        <Form.Item name="password">
          <>
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  status={errors.password ? 'error' : ''}
                  placeholder="Password"
                  autoComplete="new-password"
                />
              )}
            />
            {errors.password && <Text type="danger">{errors.password.message}</Text>}
          </>
        </Form.Item>

        <Form.Item name="confirm password">
          <>
            <Controller
              name="confirm password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  status={errors['confirm password'] ? 'error' : ''}
                  placeholder="Confirm password"
                  autoComplete="new-password"
                />
              )}
            />
            {errors['confirm password'] && (
              <Text type="danger">{errors['confirm password'].message}</Text>
            )}
          </>
        </Form.Item>
        {isError && <Text type="danger">{errors.error?.message}</Text>}

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
