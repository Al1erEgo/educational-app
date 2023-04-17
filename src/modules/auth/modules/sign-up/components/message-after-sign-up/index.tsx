import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import successRegistrationImage from '../../../../../../assets/success-registration.png'
import { MAIN_PATH } from '../../../../../../constants'
import { AUTH_PATH } from '../../../../constants'
import { cardHeadStyle, StyledCard, StyledText } from '../../../../styles'

export const GoToLoginMessage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    let timeOut = setTimeout(() => {
      navigate(`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)
    }, 2000)

    return () => {
      clearTimeout(timeOut)
    }
  }, [])

  return (
    <StyledCard title={'Thank you for registering!'} headStyle={cardHeadStyle}>
      <SuccessRegistrationImage src={successRegistrationImage} alt="checkEmail" />
      <StyledText type="secondary">
        We’ve successfully registered you, please go through the authorization
      </StyledText>
    </StyledCard>
  )
}

const SuccessRegistrationImage = styled.img`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 110px;
  height: 110px;
`
