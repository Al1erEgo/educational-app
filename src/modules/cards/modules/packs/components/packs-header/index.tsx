import { FC } from 'react'

import { Typography } from 'antd'

import { useNewCardsPackMutation } from '../../../../api'
import { StyledPacksHeader, StyledPacksTitleButton } from '../../../../styles'

const { Title } = Typography

type PacksHeaderProps = {
  isLoading: boolean
}
export const PacksHeader: FC<PacksHeaderProps> = ({ isLoading }) => {
  const [addNewCardPack, { isLoading: isLoadingForAddNewPack, isSuccess, isError, error }] =
    useNewCardsPackMutation()
  const handleAddNewPack = async () => {
    try {
      await addNewCardPack({
        cardsPack: { name: `test pack ${Math.round(Math.random() + 100)}` },
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <StyledPacksHeader>
      <Title level={2}>Packs list</Title>
      <StyledPacksTitleButton
        type="primary"
        htmlType="submit"
        size="large"
        loading={isLoading}
        onClick={handleAddNewPack}
      >
        Add new pack
      </StyledPacksTitleButton>
    </StyledPacksHeader>
  )
}
