import { FC, useEffect } from 'react'

import { Form } from 'antd'

import { StyledCheckEmailImage } from './styles'

import { useNavigateHandler } from '@/hooks'
import {
  confirmationMessagesArguments,
  confirmationMessageTimeout,
} from '@/modules/auth/constants'
import { StyledAuthButton, StyledCard, StyledText } from '@/modules/auth/styles'
import { ConfirmationMessagesArgumentsType } from '@/modules/auth/types'

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

  const handleRedirect = useNavigateHandler(redirectPath)

  useEffect(() => {
    if (timer) {
      let timeOut = setTimeout(() => {
        handleRedirect()
      }, confirmationMessageTimeout)

      return () => {
        clearTimeout(timeOut)
      }
    }
  }, [timer])

  return (
    <StyledCard title={title}>
      <StyledCheckEmailImage src={image} alt="image" />
      <StyledText type="secondary">{`${text} ${email}`}</StyledText>
      <Form.Item hidden={timer}>
        <StyledAuthButton onClick={handleRedirect}>
          Back to login
        </StyledAuthButton>
      </Form.Item>
    </StyledCard>
  )
}
