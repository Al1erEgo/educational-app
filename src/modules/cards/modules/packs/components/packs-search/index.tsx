import { Input } from 'antd'

import { StyledCardText } from '../../../../styles'
export const PacksSearch = () => {
  return (
    <div style={{ width: '35%', maxWidth: '500px', marginRight: '10px' }}>
      <StyledCardText>Search</StyledCardText>
      <Input.Search />
    </div>
  )
}
