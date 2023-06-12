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

  const { isDataLoading, tableParams, minSliderUserValue, maxSliderUserValue } =
    tableData

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
          handleSliderChange={handleSliderChange}
          isLoading={isDataLoading}
          minCardsCount={tableParams.minSlider}
          maxCardsCount={tableParams.maxSlider}
          minSliderUserValue={minSliderUserValue}
          maxSliderUserValue={maxSliderUserValue}
        />
        <PacksFilter clearFilters={handleClearFilters} />
      </StyledCardsToolbar>

      <CardsTable tableData={tableData} />
    </>
  )
}
