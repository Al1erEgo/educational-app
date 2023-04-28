import arrowBack from '../../../../assets/arrow-back.svg'
import { MAIN_PATH } from '../../../../constants'
import { StyledArrowImg, StyledBackToCardLink } from '../../../../styles'
import { CardsHeader, CardsSearch } from '../../components'
import { StyledCardsToolbar } from '../../styles'

import { PackActionButtons, PackTable } from './components'
import { useCardsPackData } from './hooks'

export const CardsPack = () => {
  const [{ packName, isOwnPack, buttonsHandlers }, { handleSearch }, tableData] = useCardsPackData()

  return (
    <>
      <StyledBackToCardLink to={MAIN_PATH.Cards}>
        <StyledArrowImg src={arrowBack} alt="arrow-back" />
        Go to Packs List
      </StyledBackToCardLink>
      <CardsHeader title={packName}>
        <PackActionButtons isOwnPack={isOwnPack} handlers={buttonsHandlers} />
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
