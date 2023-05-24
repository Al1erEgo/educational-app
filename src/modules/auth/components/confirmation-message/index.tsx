import { FC, useEffect } from 'react'

import { Form } from 'antd'

import {
  confirmationMessagesArguments,
  confirmationMessageTimeout,
} from '../../constants'
import {
  cardHeadStyle,
  StyledAuthButton,
  StyledCard,
  StyledText,
} from '../../styles'
import { ConfirmationMessagesArgumentsType } from '../../types'

import { StyledCheckEmailImage } from './styles'

import { useNavigateToOnclick } from '@/hooks'

type ConfirmationMessageType = {
  variant: keyof ConfirmationMessagesArgumentsType
  email?: string
}

export const ConfirmationMessage: FC<ConfirmationMessageType> = ({
  variant,
  email,
}) => {
  const { title, redirectPath, timer, image, text } =
    confirmationMessagesArguments[variant]

  const redirect = useNavigateToOnclick(redirectPath)

  useEffect(() => {
    if (timer) {
      let timeOut = setTimeout(() => {
        redirect()
      }, confirmationMessageTimeout)

      return () => {
        clearTimeout(timeOut)
      }
    }
  }, [timer])

  return (
    <StyledCard title={title} headStyle={cardHeadStyle}>
      <StyledCheckEmailImage src={image} alt="image" />
      <StyledText type="secondary">{`${text} ${email}`}</StyledText>
      <Form.Item hidden={timer}>
        <StyledAuthButton onClick={redirect}>Back to login</StyledAuthButton>
      </Form.Item>
    </StyledCard>
  )
}
