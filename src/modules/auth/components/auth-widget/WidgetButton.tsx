import React, { FC } from 'react'

import { Button } from 'antd'
import styled from 'styled-components'

type WidgetButtonPropsType = {
  onClick: () => void
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined
  loading?: boolean
  children?: React.ReactNode
  name: string
}

export const WidgetButton: FC<WidgetButtonPropsType> = ({
  type,
  name,
  children,
  onClick,
  loading,
}) => {
  return (
    <StyledButton type={type} onClick={onClick} icon={children} loading={loading}>
      {name}
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  width: 100px;
  height: 35px;
`
