import { FC, useEffect } from 'react'

import { Button, Form } from 'antd'

import { useNavigateToOnclick } from '../../../../hooks'
import { cardHeadStyle, StyledCard, StyledText } from '../../styles'

import { CheckEmailStyledImage } from './styles'

type ConfirmationMessagePropsType = {
  title: string
  text: string
  propsPath: string
  image?: string
  timer?: boolean
}

export const ConfirmationMessage: FC<ConfirmationMessagePropsType> = ({
  title,
  text,
  image,
  propsPath,
  timer,
}) => {
  const redirect = useNavigateToOnclick(propsPath)

  const buttonProps = {
    onClick: redirect,
    type: 'primary',
    htmlType: 'submit',
    size: 'large',
    style: { fontWeight: '500' },
    block: true,
  } as const

  useEffect(() => {
    if (timer) {
      let timeOut = setTimeout(() => {
        redirect()
      }, 3000)

      return () => {
        clearTimeout(timeOut)
      }
    }
  }, [timer])

  return (
    <StyledCard title={title} headStyle={cardHeadStyle}>
      <CheckEmailStyledImage src={image} alt="image" />
      <StyledText type="secondary">{text}</StyledText>
      {!timer && (
        <Form.Item>
          <Button {...buttonProps}>Back to login</Button>
        </Form.Item>
      )}
    </StyledCard>
  )
}
