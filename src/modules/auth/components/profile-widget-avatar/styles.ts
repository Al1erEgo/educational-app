import { Skeleton } from 'antd'
import styled from 'styled-components'

export const StyledUserIconWidget = styled.img.attrs({
  alt: 'avatar',
})`
  margin-right: 7px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
`

export const StyledSkeletonAvatar = styled(Skeleton.Avatar).attrs({
  size: 23,
  active: true,
})`
  margin-right: 7px;
`
