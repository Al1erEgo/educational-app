import arrowBack from '../../../../assets/arrow-back.svg'
import { MAIN_PATH } from '../../../../constants'
import { StyledArrowImg, StyledBackToCardLink } from '../../../../styles'
import { CardsHeader, CardsSearch } from '../../components'
import { StyledCardsTitleButton, StyledCardsToolbar } from '../../styles'

import { PackTable } from './components'
import { useCardsPackData } from './hooks'

export const CardsPack = () => {
  const [
    { packName },
    { titleButtonName, titleButtonOnclickHandler },
    { setSearchParam },
    { isPackDataLoading, handleTableChange, tableParams, tableData, tableColumns },
  ] = useCardsPackData()

  return (
    <>
      <StyledBackToCardLink to={MAIN_PATH.Cards}>
        <StyledArrowImg src={arrowBack} alt="arrow-back" />
        Go to Packs List
      </StyledBackToCardLink>
      <CardsHeader title={packName}>
        <StyledCardsTitleButton loading={isPackDataLoading} onClick={titleButtonOnclickHandler}>
          {titleButtonName}
        </StyledCardsTitleButton>
      </CardsHeader>
      <StyledCardsToolbar>
        <CardsSearch
          size="big"
          placeholder={'Enter question for searching'}
          searchValue={tableParams.searchValue}
          onSearch={setSearchParam}
        />
      </StyledCardsToolbar>
      <PackTable
        data={tableData}
        tableColumns={tableColumns}
        tableParams={tableParams}
        isLoading={isPackDataLoading}
        onTableChange={handleTableChange}
      />
    </>
  )
}
