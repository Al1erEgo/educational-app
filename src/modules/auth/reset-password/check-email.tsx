import React from 'react'

import { Button, Form } from 'antd'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import checkEmailImage from '../../../assets/check-email-image.svg'
import { MAIN_PATH } from '../../../constants'
import { AUTH_PATH } from '../constants'
import { cardHeadStyle, StyledCard, StyledText } from '../styles'

type CheckEmailPropsType = { email: string }

export const CheckEmail = (props: CheckEmailPropsType) => {
  const navigate = useNavigate()
  const goToLogin = () => {
    navigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)
  }

  return (
    <StyledCard title={'Check Email'} headStyle={cardHeadStyle}>
      <CheckEmailStyledImage src={checkEmailImage} alt="checkEmail" />
      <StyledText type="secondary">
        We’ve sent an Email with instructions to {props.email}
      </StyledText>
      <Form.Item>
        <Button
          onClick={goToLogin}
          type="primary"
          htmlType="submit"
          size="large"
          style={{ fontWeight: '500' }}
          block
        >
          Back to login
        </Button>
      </Form.Item>
    </StyledCard>
  )
}

const CheckEmailStyledImage = styled.img`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 110px;
`
