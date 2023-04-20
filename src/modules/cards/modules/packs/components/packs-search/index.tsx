import { Input } from 'antd'

import { PacksSearchWrapper, StyledCardText } from '../../../../styles'
export const PacksSearch = () => {
  return (
    <PacksSearchWrapper>
      <StyledCardText>Search</StyledCardText>
      <Input.Search />
    </PacksSearchWrapper>
  )
}
