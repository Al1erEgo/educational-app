import React from 'react'

import { UserOutlined } from '@ant-design/icons'
import styled from 'styled-components'

type WidgetProfilePropsType = {
  userName: string | undefined
  onClick: () => void
}

export const WidgetProfile = (props: WidgetProfilePropsType) => {
  return (
    <Wrapper onClick={props.onClick}>
      <Name>{props.userName}</Name>
      <UserIconWidget />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const Name = styled.span`
  border-bottom: 1px dashed #1677ff;
  margin-right: 7px;
  font-family: 'Montserrat', sans-serif;
`
const UserIconWidget = styled(UserOutlined)`
  margin-right: 7px;
  margin-top: 7px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
`
