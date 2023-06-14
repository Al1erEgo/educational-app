import { FC } from 'react'

import { BackToCardsButton, CardsHeader, CardsSearch, CardsTable, PackActionsButtons } from '@/modules/cards/components'
import { usePackData } from '@/modules/cards/hooks'
import { StyledCardsToolbar } from '@/modules/cards/styles'

export const PackPage: FC = () => {
  const [{ packName, packDeckCover, isEmptyPack, isOwnPack, buttonsHandlers }, { handleSearch }, tableData] =
    usePackData()

  return (
    <>
      <BackToCardsButton />
      <CardsHeader title={packName} image={packDeckCover}>
        <PackActionsButtons
          isEmptyPack={isEmptyPack}
          isOwnPack={isOwnPack}
          disabled={tableData.isDataLoading}
          handlers={buttonsHandlers}
        />
      </CardsHeader>
      <StyledCardsToolbar>
        <CardsSearch
          size="big"
          placeholder={'Enter question for searching'}
          searchValue={tableData.tableParams.searchValue}
          onSearch={handleSearch}
          disabled={tableData.isDataLoading}
        />
      </StyledCardsToolbar>
      <CardsTable tableData={tableData} />
    </>
  )
}
