import React from 'react'

import { CardsHeader, CardsSearch, CardsTable, PacksButton, PacksFilter, PacksSlider } from '@/modules/cards/components'
import { usePacksData } from '@/modules/cards/hooks'
import { StyledCardsTitleButton, StyledCardsToolbar } from '@/modules/cards/styles'

export const Packs = () => {
  const [
    { handlePacksSearch },
    tableData,
    { handleSliderChange },
    { handleToggleButton },
    { handleClearFilters },
    { modalHandlers },
  ] = usePacksData()

  const { isDataLoading, tableParams, minCardsCountValue, maxCardsCountValue } = tableData

  return (
    <>
      <CardsHeader title={'Packs list'}>
        <StyledCardsTitleButton disabled={isDataLoading} onClick={() => modalHandlers.addPackModal({ cardsPack: {} })}>
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
          minSlider={tableParams.minSlider}
          maxSlider={tableParams.maxSlider}
          minCardsCountValue={minCardsCountValue}
          maxCardsCountValue={maxCardsCountValue}
        />
        <PacksFilter clearFilters={handleClearFilters} />
      </StyledCardsToolbar>

      <CardsTable tableData={tableData} />
    </>
  )
}
