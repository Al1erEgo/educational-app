import { FC, useEffect } from 'react'

import { Form } from 'antd'

import { StyledCheckEmailImage } from './styles'

import { useDoNavigate } from '@/hooks'
import { StyledAuthButton, StyledCard, StyledText } from '@/modules/auth/styles'

type ConfirmationMessageProps = {
  title: string
  redirectPath: string
  text: string
  image: string
  timer?: boolean
  email?: string
}

const confirmationMessageTimeout = 5000

export const ConfirmationMessage: FC<ConfirmationMessageProps> = ({
  title,
  redirectPath,
  timer,
  image,
  text,
  email,
}) => {
  const handleRedirect = useDoNavigate(redirectPath)

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
        <StyledAuthButton onClick={handleRedirect}>Back to login</StyledAuthButton>
      </Form.Item>
    </StyledCard>
  )
}
