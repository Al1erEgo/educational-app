import { yupResolver } from '@hookform/resolvers/yup'
import { AnyAction } from '@reduxjs/toolkit'
import { Button, Checkbox, Form, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ThunkDispatch } from 'redux-thunk'
import * as yup from 'yup'

import { MAIN_PATH } from '../../../constants'
import { AppRootStateType } from '../../../store'
import { rootApi } from '../../../store/root-api'
import { isFetchBaseQueryError } from '../../../utils'
import { authApi, useAuthMeQuery, useLoginMutation } from '../auth-api'
import { AUTH_PATH } from '../constants'
import { cardHeadStyle, StyledCard, StyledErrorText, StyledNavLink, StyledP } from '../styles'

import { ForgotPasswordLink } from './styles'

type LoginFormInputs = {
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
    setError,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    mode: 'onBlur',
    resolver: yupResolver(loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  })

  const [login, { isLoading, isError }] = useLoginMutation()
  const [trigger, response] = authApi.useLazyAuthMeQuery()
  const navigate = useNavigate()

  type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
  const dispatch = useDispatch<AppDispatch>()

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const res = await login(data).unwrap()

      //dispatch(authApi.util.upsertQueryData('authMe', undefined, res))
      await trigger()
      //console.log('res', response)
      navigate(`${MAIN_PATH.Root}`)
    } catch (e: unknown) {
      if (isFetchBaseQueryError(e)) {
        setError('error', { message: e.data.error })
      }
    }
  }

  return (
    <StyledCard title={'Sign In'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <Form.Item
          name="email"
          validateStatus={errors.email ? 'error' : ''}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} placeholder="Email" autoComplete="email" />}
          />
        </Form.Item>
        <Form.Item
          name="password"
          validateStatus={errors.password ? 'error' : ''}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input.Password {...field} placeholder="Password" autoComplete="password" />
            )}
          />
        </Form.Item>
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
            Sign In
          </Button>
        </Form.Item>
      </Form>
      <StyledP>Have no account?</StyledP>

      <StyledNavLink to={`${MAIN_PATH.Auth}${AUTH_PATH.SignUp}`}>Sign Up</StyledNavLink>
    </StyledCard>
  )
}
