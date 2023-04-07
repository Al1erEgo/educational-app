import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Form, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import { MAIN_PATH } from '../../../constants'
import { isFetchBaseQueryError } from '../../../utils'
import { useRegisterMutation } from '../auth-api'
import { AUTH_PATH } from '../constants'
import { cardHeadStyle, StyledCard, StyledErrorText, StyledNavLink, StyledP } from '../styles'

type SignUpFormInputs = {
  email: string
  password: string
  'confirm password': string
  error?: string
}

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
  } = useForm<SignUpFormInputs>({ mode: 'onBlur', resolver: yupResolver(schema) })
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
        <Form.Item
          name="email"
          validateStatus={errors.email ? 'error' : ''}
          help={errors.email?.message}
        >
          <>
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => <Input {...field} placeholder="Email" autoComplete="email" />}
            />
          </>
        </Form.Item>

        <Form.Item
          name="password"
          validateStatus={errors.password ? 'error' : ''}
          help={errors.password?.message}
        >
          <>
            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input.Password {...field} placeholder="Password" autoComplete="new-password" />
              )}
            />
          </>
        </Form.Item>

        <Form.Item
          name="confirm password"
          validateStatus={errors['confirm password'] ? 'error' : ''}
          help={errors['confirm password']?.message}
        >
          <>
            <Controller
              name="confirm password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <Input.Password
                  {...field}
                  placeholder="Confirm password"
                  autoComplete="new-password"
                />
              )}
            />
          </>
        </Form.Item>
        {isError && <StyledErrorText type="danger">{errors.error?.message}</StyledErrorText>}
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
