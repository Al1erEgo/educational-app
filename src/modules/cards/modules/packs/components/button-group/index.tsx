import { FC } from 'react'

import { Button } from 'antd'

type PacksButtonProps = {
  text: string
  isActive: boolean
  onClick: (text: string) => void
}
export const PacksButton: FC<PacksButtonProps> = ({ text, isActive, onClick }) => (
  <Button
    type={isActive ? 'primary' : 'default'}
    style={{ width: '100px' }}
    onClick={() => onClick(text)}
  >
    {text}
  </Button>
)
