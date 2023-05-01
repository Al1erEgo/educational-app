import { FC, useEffect } from 'react'

import { Form } from 'antd'

import { useNavigateToOnclick } from '../../../../hooks'
import { confirmationMessageArguments } from '../../constants/confirmation-message'
import { cardHeadStyle, StyledCard, StyledText, StyledButton } from '../../styles'

import { StyledCheckEmailImage } from './styles'

type PropsType = {
  variant: keyof typeof confirmationMessageArguments
  email?: string
}

export const ConfirmationMessage: FC<PropsType> = ({ variant, email }) => {
  const { title, propsPath, timer, image, text } = confirmationMessageArguments[variant]
  const redirect = useNavigateToOnclick(propsPath)

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
      <StyledCheckEmailImage src={image} alt="image" />
      <StyledText type="secondary">{`${text} ${email}`}</StyledText>
      {!timer && (
        <Form.Item>
          <StyledButton onClick={redirect}>Back to login</StyledButton>
        </Form.Item>
      )}
    </StyledCard>
  )
}
