import { Button, Card, Form, Input, Layout, Row } from 'antd'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import { useRegisterMutation } from '../auth-api'

type SignUpFormInputs = {
  email: string
  password: string
  confirmPassword: string
}

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>()
  const [registerUser, { isLoading, isError, error }] = useRegisterMutation()

  const onSubmit = async (data: SignUpFormInputs) => {
    await registerUser(data).unwrap()
  }

  console.log('isLoading', isLoading)
  console.log('isError', isError)
  console.log('registerUser', registerUser)

  return (
    <>
      <Layout>
        <Row
          justify="center"
          align="middle"
          style={{ height: 'calc(100vh - 64px)', justifyContent: 'center' }}
        >
          <Card>
            <h1>Sign Up</h1>
            <Form onFinish={handleSubmit(onSubmit)}>
              <Form.Item wrapperCol={{ offset: 0, span: 0 }} label="email" name="email">
                <Input {...register('email', { required: true })} />
              </Form.Item>
              {errors.email && <p style={{ color: 'red' }}>This field is required</p>}

              <Form.Item wrapperCol={{ offset: 0, span: 0 }} label="password" name="password">
                <Input {...register('password', { required: true })} />
              </Form.Item>
              {errors.password && <p style={{ color: 'red' }}>This field is required</p>}

              <Form.Item
                wrapperCol={{ offset: 0, span: 0 }}
                label="confirm password"
                name="confirmPassword"
              >
                <Input {...register('confirmPassword', { required: true })} />
              </Form.Item>
              {errors.confirmPassword && <p style={{ color: 'red' }}>This field is required</p>}

              {/*{isError && <span>An error occurred: {error?.message}</span>}*/}
              <Form.Item wrapperCol={{ offset: 0, span: 0 }}>
                <StyledButton type="primary" htmlType="submit" loading={isLoading}>
                  Sign Up
                </StyledButton>
              </Form.Item>
            </Form>
            <p>Already have an account?</p>
            <a href="/auth/sign-in">Sign In</a>
          </Card>
        </Row>
      </Layout>
    </>
  )
}

const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
  background-color: blue;
  color: white;

  &:hover {
    background-color: darkblue;
  }
`
