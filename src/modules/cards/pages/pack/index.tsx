import { FC } from 'react'

import {
  BackToCardsButton,
  CardsHeader,
  CardsSearch,
  CardsTable,
  PackActionsButtons,
} from '../../components'
import { usePackData } from '../../hooks'
import { StyledCardsToolbar } from '../../styles'

export const Pack: FC = () => {
  const [
    { packName, isEmptyPack, isOwnPack, buttonsHandlers },
    { handleSearch },
    tableData,
  ] = usePackData()

  return (
    <>
      <BackToCardsButton />
      <CardsHeader title={packName}>
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
