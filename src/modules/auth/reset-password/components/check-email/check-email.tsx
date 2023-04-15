import React, { FC } from 'react'

import { Button, Form } from 'antd'
import { ButtonHTMLType, ButtonType } from 'antd/es/button/buttonHelpers'
import { SizeType } from 'antd/es/config-provider/SizeContext'
import styled from 'styled-components'

import checkEmailImage from '../../../../../assets/check-email-image.svg'
import { MAIN_PATH } from '../../../../../constants'
import { useNavigateToOnclick } from '../../../../../hooks'
import { AUTH_PATH } from '../../../constants'
import { cardHeadStyle, StyledCard, StyledText } from '../../../styles'

type CheckEmailPropsType = { email: string }

export const CheckEmail: FC<CheckEmailPropsType> = ({ email }) => {
  const goToLogin = useNavigateToOnclick(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)

  const buttonProps = {
    onClick: goToLogin,
    type: 'primary' as ButtonType,
    htmlType: 'submit' as ButtonHTMLType,
    size: 'large' as SizeType,
    style: { fontWeight: '500' },
    block: true,
  }

  return (
    <StyledCard title={'Check Email'} headStyle={cardHeadStyle}>
      <ImgWrapper>
        <Div>
          <img src={checkEmailImage} alt="checkEmail" />
        </Div>
      </ImgWrapper>
      <StyledText type="secondary">We’ve sent an Email with instructions to {email}</StyledText>
      <Form.Item>
        <Button {...buttonProps}>Back to login</Button>
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
