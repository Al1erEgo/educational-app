import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Card, Form, Input } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import * as yup from 'yup'

import { useRegisterMutation } from '../auth-api'

type SignUpFormInputs = {
  email: string
  password: string
  confirmPassword: string
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required()

export const SignUp = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpFormInputs>({ resolver: yupResolver(schema) })
  const [registerUser, { isLoading, isError, error, data }] = useRegisterMutation()

  const onSubmit = async (data: SignUpFormInputs) => {
    try {
      await registerUser(data).unwrap()
    } catch (e: any) {
      console.log('e', e.data)
    }
  }

  console.log('error', error)

  return (
    <Card
    /* style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '26rem',
        margin: '0 auto',
      }}*/
    >
      <StyledTitle>Sign Up</StyledTitle>

      <Form onFinish={handleSubmit(onSubmit)}>
        <Form.Item name="email">
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input {...field} placeholder="Email" />}
          />
        </Form.Item>
        {errors.email && <p style={{ color: 'red' }}>Email is required</p>}

        <Form.Item name="password">
          <Controller
            name="password"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input.Password {...field} placeholder="Password" />}
          />
        </Form.Item>
        {errors.password && <p style={{ color: 'red' }}>Password is required</p>}

        <Form.Item name="confirmPassword">
          <Controller
            name="confirmPassword"
            control={control}
            rules={{ required: true }}
            render={({ field }) => <Input.Password {...field} placeholder="Confirm Password" />}
          />
        </Form.Item>
        {errors.confirmPassword && <p style={{ color: 'red' }}>This field is required</p>}

        {/*  {isError && <span>An error occurred: {error?.message}</span>}*/}

        {/*    {isError && (
              <p style={{ color: 'red' }}>
                Invalid email or password
                   {error.status !== 400 ? (error as FetchBaseQueryError).message : error?.data}
              </p>
            )}*/}

        {/* {isError && (
              <p style={{ color: 'red' }}>{error?.data?.error?.message || 'Unknown error'}</p>
            )}*/}

        <Form.Item>
          <StyledButton type="primary" htmlType="submit" loading={isLoading}>
            Sign Up
          </StyledButton>
        </Form.Item>
      </Form>
      <p>Already have an account?</p>
      <NavLink to="/auth/sign-in">Sign In</NavLink>
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
  font-weight: 500;
  margin-bottom: 1rem;
`
