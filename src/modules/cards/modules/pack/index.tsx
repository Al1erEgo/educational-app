import { FC } from 'react'

import { CardsHeader, CardsSearch } from '../../components'
import { BackToCardsButton } from '../../components/back-to-cards-button'
import { StyledCardsToolbar } from '../../styles'

import { PackActionsButtons, PackTable } from './components'
import { usePackData } from './hooks'

export const Pack: FC = () => {
  const [{ packName, isOwnPack, buttonsHandlers }, { handleSearch }, tableData] = usePackData()

  return (
    <>
      <BackToCardsButton />
      <CardsHeader title={packName}>
        <PackActionsButtons isOwnPack={isOwnPack} handlers={buttonsHandlers} />
      </CardsHeader>
      <StyledCardsToolbar>
        <CardsSearch
          size="big"
          placeholder={'Enter question for searching'}
          searchValue={tableData.tableParams.searchValue}
          onSearch={handleSearch}
        />
      </StyledCardsToolbar>
      <PackTable data={tableData} />
    </>
  )
}
