import React from 'react'

import {
  CardsHeader,
  CardsSearch,
  PacksButton,
  PacksFilter,
  PacksSlider,
  PacksTable,
} from '../../components'
import { usePacksData } from '../../hooks'
import { StyledCardsTitleButton, StyledCardsToolbar } from '../../styles'

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
}
