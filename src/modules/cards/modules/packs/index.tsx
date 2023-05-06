import React from 'react'

import { CardsHeader, CardsSearch } from '../../components'
import { useModalContext } from '../../providers/use-modal'
import { StyledCardsTitleButton, StyledCardsToolbar } from '../../styles'

import { PacksButton, PacksFilter, PacksSlider, PacksTable } from './components'
import { AddNewPacksModal } from './components/packs-modal'
import { usePacksData } from './hooks'

export const Packs = () => {
  const [
    { handlePacksSearch },
    packsTableData,
    { handleAddNewPack },
    { handleSliderChange },
    { handleToggleButton },
    { handleClearFilters },
  ] = usePacksData()

  const { isPacksDataLoading, packsTableParams, data } = packsTableData

  const { showModal } = useModalContext()

  const handleOk = (name: string, isPrivate?: boolean) => handleAddNewPack(name)

  const handleAddNewPackButtonClick = () => {
    showModal({
      title: 'Add New Pack',
      content: <AddNewPacksModal onOk={handleOk} />,
    })
  }

  return (
    <>
      <CardsHeader title={'Packs list'}>
        <StyledCardsTitleButton loading={isPacksDataLoading} onClick={handleAddNewPackButtonClick}>
          Add New Pack
        </StyledCardsTitleButton>
      </CardsHeader>

      <StyledCardsToolbar>
        <CardsSearch
          searchValue={packsTableParams.searchValue}
          onSearch={handlePacksSearch}
          placeholder={'Enter pack name'}
        />
        <PacksButton
          activeButton={packsTableParams.activeButton}
          handleToggleButton={handleToggleButton}
        />
        <PacksSlider
          state={packsTableParams}
          handleSliderChange={handleSliderChange}
          minCardsCount={data?.minCardsCount}
          maxCardsCount={data?.maxCardsCount}
        />
        <PacksFilter clearFilters={handleClearFilters} />
      </StyledCardsToolbar>

      <PacksTable packsTableData={packsTableData} />
    </>
  )
}
