import { Button, Card, Form, Input, Layout, Row } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { useRequestPasswordResetMutation } from '../auth-api'

type ResetPasswordFormInputs = {
  email: string
  message: string
}

export const ResetPassword = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ResetPasswordFormInputs>()
  const [
    resetPassword,
    {
      isLoading,
      isError,
      error,
      requestId,
      endpointName,
      data,
      reset,
      fulfilledTimeStamp,
      isSuccess,
      isUninitialized,
      originalArgs,
      status,
    },
  ] = useRequestPasswordResetMutation()

  const onSubmit = async (data: ResetPasswordFormInputs) => {
    await resetPassword(data).unwrap()
    /*    {!isError && <Navigate to="/auth/check-email" />}*/
  }

  console.log('isLoading', isLoading)
  console.log('isError', isError)
  console.log('error', error)
  console.log('error', error)
  console.log('requestId', requestId)
  console.log('endpointName', endpointName)
  console.log('reset', reset)
  console.log('fulfilledTimeStamp', fulfilledTimeStamp)
  console.log('isSuccess', isSuccess)
  console.log('isUninitialized', isUninitialized)
  console.log('originalArgs', originalArgs)
  console.log('status', status)
  console.log('data', data)

  return (
    <Layout>
      <Row
        justify="center"
        align="middle"
        style={{ height: 'calc(100vh - 16px)', justifyContent: 'center' }}
      >
        <Card>
          <h1>Forgot your password?</h1>
          <Form onFinish={handleSubmit(onSubmit)}>
            <Form.Item label="email" name="email">
              <Controller
                name="email"
                control={control}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
            {errors.email && <p style={{ color: 'red' }}>This field is required</p>}

            <Form.Item>
              <StyledButton type="primary" htmlType="submit" loading={isLoading}>
                Send Instructions
              </StyledButton>
            </Form.Item>
          </Form>
          <p>Did you remember your password?</p>
          <NavLink to="/auth/sign-in">Try logging in</NavLink>
        </Card>
      </Row>
    </Layout>
  )
}

const StyledButton = styled(Button)`
  width: 100%;
  height: 40px;
  background-color: blue;
  color: white;

  &:hover {
    background-color: lightblue;
  }
`
