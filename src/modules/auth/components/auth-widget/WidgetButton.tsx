import React from 'react'

import { Button } from 'antd'
import styled from 'styled-components'

type WidgetButtonPropsType = {
  onClick: () => void
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined
  loading?: boolean
  children?: React.ReactNode
  name: string
}

export const WidgetButton = (props: WidgetButtonPropsType) => {
  return (
    <StyledButton
      type={props.type}
      onClick={props.onClick}
      icon={props.children}
      loading={props.loading}
    >
      {props.name}
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  width: 100px;
  height: 35px;
`
