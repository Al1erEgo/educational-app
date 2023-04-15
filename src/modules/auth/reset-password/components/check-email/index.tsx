import { FC } from 'react'

import { Button, Form } from 'antd'

import checkEmailImage from '../../../../../assets/check-email-image.svg'
import { MAIN_PATH } from '../../../../../constants'
import { useNavigateToOnclick } from '../../../../../hooks'
import { AUTH_PATH } from '../../../constants'
import { cardHeadStyle, StyledCard, StyledText } from '../../../styles'

import { CheckEmailStyledImage } from './styles'

type CheckEmailPropsType = { email: string }

export const CheckEmail: FC<CheckEmailPropsType> = ({ email }) => {
  const goToLogin = useNavigateToOnclick(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)

  const buttonProps = {
    onClick: goToLogin,
    type: 'primary',
    htmlType: 'submit',
    size: 'large',
    style: { fontWeight: '500' },
    block: true,
  } as const

  return (
    <StyledCard title={'Check Email'} headStyle={cardHeadStyle}>
      <CheckEmailStyledImage src={checkEmailImage} alt="checkEmail" />
      <StyledText type="secondary">We’ve sent an Email with instructions to {email}</StyledText>
      <Form.Item>
        <Button {...buttonProps}>Back to login</Button>
      </Form.Item>
    </StyledCard>
  )
}
