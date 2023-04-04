import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Card, Form, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import * as yup from 'yup'

import { MAIN_PATH } from '../../../constants'
import { isFetchBaseQueryError } from '../../../utils'
import { useRegisterMutation } from '../auth-api'
import { AUTH_PATH } from '../constants'

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
    <Card>
      <StyledTitle>Sign Up</StyledTitle>

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
            {errors.email && <StyledSpan>{errors.email.message}</StyledSpan>}
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
            {errors.password && <StyledSpan>{errors.password.message}</StyledSpan>}
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
              <StyledSpan>{errors['confirm password'].message}</StyledSpan>
            )}
          </>
        </Form.Item>

        {isError && <StyledSpan>{errors.error?.message}</StyledSpan>}

        <Form.Item>
          <StyledButton type="primary" htmlType="submit" loading={isLoading}>
            Sign Up
          </StyledButton>
        </Form.Item>
      </Form>

      <StyledP>Already have an account?</StyledP>

      <StyledNavLink to={`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`}>Sign In</StyledNavLink>
    </Card>
  )
}

const StyledButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36px;
  background-color: #366eff;
  color: white;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 1rem;

  &:hover {
    background-color: lightblue;
  }
`
const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const StyledSpan = styled.span`
  color: red;
`

const StyledP = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.7rem;
  line-height: 24px;
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  line-height: 24px;
`
