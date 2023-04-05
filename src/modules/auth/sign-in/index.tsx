import { Card, Checkbox, Form, Input } from 'antd'

import { StyledButton, StyledNavLink, StyledP, StyledTitle } from '../styles'

export const SignIn = () => {
  return (
    <Card>
      <StyledTitle>Sign In</StyledTitle>
      <Form>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 0,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <StyledButton type="primary" htmlType="submit" loading={false}>
            Sign In
          </StyledButton>
        </Form.Item>
      </Form>
      <StyledP>Have no account?</StyledP>

      <StyledNavLink to="/auth/sign-up">Sign Up</StyledNavLink>
    </Card>
  )
}
