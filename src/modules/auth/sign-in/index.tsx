import { Button, Checkbox, Form, Input, Typography } from 'antd'

import { MAIN_PATH } from '../../../constants'
import { AUTH_PATH } from '../constants'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledP } from '../styles'

import { ForgotPasswordLink } from './styles'

const { Text } = Typography

export const SignIn = () => {
  return (
    <StyledCard title={'Sign In'} headStyle={cardHeadStyle}>
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
          <Input placeholder="Email" autoComplete="email" />
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
          <Input.Password placeholder="Password" autoComplete="password" />
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
        <ForgotPasswordLink to={`${MAIN_PATH.Auth}${AUTH_PATH.ResetPassword}`}>
          Forgot password?
        </ForgotPasswordLink>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={false}
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
