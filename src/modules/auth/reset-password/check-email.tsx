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
      <ImgWrapper>
        <Div>
          <img src={checkEmailImage} alt="checkEmail" />
        </Div>
      </ImgWrapper>
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

export const ImgWrapper = styled(Form.Item)`
  display: flex;
  justify-content: center;
`

const Div = styled.div`
  width: 110px;
  height: 110px;
`
