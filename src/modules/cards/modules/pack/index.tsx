import { FC } from 'react'

import {
  BackToCardsButton,
  CardsHeader,
  CardsSearch,
  CardsTable,
} from '../../components'
import { StyledCardsToolbar } from '../../styles'

import { PackActionsButtons } from './components'
import { usePackData } from './hooks'

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
          handlers={buttonsHandlers}
        />
      </CardsHeader>
      <StyledCardsToolbar>
        <CardsSearch
          size="big"
          placeholder={'Enter question for searching'}
          searchValue={tableData.tableParams.searchValue}
          onSearch={handleSearch}
        />
      </StyledCardsToolbar>
      <CardsTable tableData={tableData} />
    </>
  )
}
