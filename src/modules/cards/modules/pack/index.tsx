import { FC } from 'react'

import arrowBack from '../../../../assets/arrow-back.svg'
import { MAIN_PATH } from '../../../../constants'
import { StyledArrowImg, StyledBackToCardLink } from '../../../../styles'
import { CardsHeader, CardsSearch } from '../../components'
import { StyledCardsToolbar } from '../../styles'

import { PackActionsButtons, PackTable } from './components'
import { usePackData } from './hooks'

export const Pack: FC = () => {
  const [{ packName, isOwnPack, buttonsHandlers }, { handleSearch }, tableData] = usePackData()

  return (
    <>
      <StyledBackToCardLink to={MAIN_PATH.Cards}>
        <StyledArrowImg src={arrowBack} alt="arrow-back" />
        Go to Packs List
      </StyledBackToCardLink>
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
