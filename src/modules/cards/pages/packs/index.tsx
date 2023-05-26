import React from 'react'

import {
  CardsHeader,
  CardsSearch,
  CardsTable,
  PacksButton,
  PacksFilter,
  PacksSlider,
} from '@/modules/cards/components'
import { usePacksData } from '@/modules/cards/hooks'
import {
  StyledCardsTitleButton,
  StyledCardsToolbar,
} from '@/modules/cards/styles'

export const Packs = () => {
  const [
    { handlePacksSearch },
    tableData,
    { handleSliderChange },
    { handleToggleButton },
    { handleClearFilters },
    { modalHandlers },
  ] = usePacksData()

  const { isDataLoading, tableParams } = tableData

  return (
    <>
      <CardsHeader title={'Packs list'}>
        <StyledCardsTitleButton
          disabled={isDataLoading}
          onClick={() => modalHandlers.addPackModal({ cardsPack: {} })}
        >
          Add New Pack
        </StyledCardsTitleButton>
      </CardsHeader>

      <StyledCardsToolbar>
        <CardsSearch
          searchValue={tableParams.searchValue}
          onSearch={handlePacksSearch}
          placeholder={'Enter pack name'}
          disabled={isDataLoading}
        />
        <PacksButton
          activeButton={tableParams.activeButton}
          handleToggleButton={handleToggleButton}
          isLoading={isDataLoading}
        />
        <PacksSlider
          state={tableParams}
          handleSliderChange={handleSliderChange}
          minCardsCount={tableData.tableParams.minCardsCount}
          maxCardsCount={tableData.tableParams.maxCardsCount}
          isLoading={isDataLoading}
        />
        <PacksFilter clearFilters={handleClearFilters} />
      </StyledCardsToolbar>

      <CardsTable tableData={tableData} />
    </>
  )
}

/*import React from 'react'

 import {
 CardsHeader,
 CardsSearch,
 PacksButton,
 PacksFilter,
 PacksSlider,
 PacksTable,
 } from '@/modules/cards/components'
 import { usePacksData } from '@/modules/cards/hooks'
 import {
 StyledCardsTitleButton,
 StyledCardsToolbar,
 } from '@/modules/cards/styles'

 export const Packs = () => {
 const [
 { handlePacksSearch },
 packsTableData,
 { handleSliderChange },
 { handleToggleButton },
 { handleClearFilters },
 { modalHandlers },
 ] = usePacksData()

 const { isPacksDataLoading, packsTableParams, data } = packsTableData

 return (
 <>
 <CardsHeader title={'Packs list'}>
 <StyledCardsTitleButton
 disabled={isPacksDataLoading}
 onClick={() => modalHandlers.addPackModal({ cardsPack: {} })}
 >
 Add New Pack
 </StyledCardsTitleButton>
 </CardsHeader>

 <StyledCardsToolbar>
 <CardsSearch
 searchValue={packsTableParams.searchValue}
 onSearch={handlePacksSearch}
 placeholder={'Enter pack name'}
 disabled={isPacksDataLoading}
 />
 <PacksButton
 activeButton={packsTableParams.activeButton}
 handleToggleButton={handleToggleButton}
 isLoading={isPacksDataLoading}
 />
 <PacksSlider
 state={packsTableParams}
 handleSliderChange={handleSliderChange}
 minCardsCount={data?.minCardsCount}
 maxCardsCount={data?.maxCardsCount}
 isLoading={isPacksDataLoading}
 />
 <PacksFilter clearFilters={handleClearFilters} />
 </StyledCardsToolbar>

 <PacksTable packsTableData={packsTableData} />
 </>
 )
 }*/
