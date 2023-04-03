import { Button, Card, Checkbox, Form, Input, Layout, Row } from 'antd'
import { Controller, useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { useLoginMutation } from '../auth-api'

type SignInFormInputs = {
  email: string
  password: string
  rememberMe: boolean
}

export const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInFormInputs>()
  const [loginUser, { isLoading, isError, error }] = useLoginMutation()

  const onSubmit = async (data: SignInFormInputs) => {
    try {
      await loginUser(data).unwrap()
    } catch (e: any) {
      console.log('error', e.data.error)
    }
  }

  return (
    <Layout>
      <Row
        justify="center"
        align="middle"
        style={{ height: 'calc(100vh - 16px)', justifyContent: 'center' }}
      >
        <Card>
          <h1>Sign In</h1>
          <Form onFinish={handleSubmit(onSubmit)}>
            <Form.Item label="email" name="email">
              <Controller
                name="email"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Input {...field} />}
              />
            </Form.Item>
            {errors.email && <p style={{ color: 'red' }}>This field is required</p>}

            <Form.Item label="password" name="password">
              <Controller
                name="password"
                control={control}
                rules={{ required: true }}
                render={({ field }) => <Input.Password {...field} />}
              />
            </Form.Item>
            {errors.password && <p style={{ color: 'red' }}>This field is required</p>}

            <Form.Item>
              <Controller
                control={control}
                name="rememberMe"
                defaultValue={false}
                render={({ field }) => (
                  <Checkbox {...field} checked={field.value}>
                    Remember Me
                  </Checkbox>
                )}
              />
            </Form.Item>

            <Form.Item>
              <StyledLink to="/auth/reset-password">Forgot Password?</StyledLink>
            </Form.Item>

            {isError && (
              <p style={{ color: 'red' }}>
                Invalid email or password
                {/*   {error.status !== 400 ? (error as FetchBaseQueryError).message : error?.data}*/}
              </p>
            )}

            <Form.Item wrapperCol={{ offset: 0, span: 0 }}>
              <StyledButton type="primary" htmlType="submit" loading={isLoading}>
                Sign In
              </StyledButton>
            </Form.Item>
          </Form>
          <NavLink to="/auth/sign-up">Sign Up</NavLink>
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
const StyledLink = styled(NavLink)`
  color: black;
  font-size: 14px;
  line-height: 17px;
  font-weight: 500;
`
