import { FC } from 'react'

import { Typography } from 'antd'

import { StyledPacksHeader, StyledPacksTitleButton } from '../../../../styles'

const { Title } = Typography

type PacksHeaderProps = {
  isAddNewPackLoading: boolean
  handleAddNewPack: () => Promise<void>
}

export const PacksHeader: FC<PacksHeaderProps> = ({ isAddNewPackLoading, handleAddNewPack }) => {
  return (
    <StyledPacksHeader>
      <Title level={2}>Packs list</Title>
      <StyledPacksTitleButton
        type="primary"
        htmlType="submit"
        size="large"
        loading={isAddNewPackLoading}
        onClick={handleAddNewPack}
      >
        Add new pack
      </StyledPacksTitleButton>
    </StyledPacksHeader>
  )
}
