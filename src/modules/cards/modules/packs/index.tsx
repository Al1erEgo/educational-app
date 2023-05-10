import React from 'react'

import { Skeleton } from 'antd'

import { useModalContext } from '../../../modal-provider/hooks'
import { CardsHeader, CardsSearch } from '../../components'
import { StyledCardsTitleButton, StyledCardsToolbar } from '../../styles'

import { PacksButton, PacksFilter, PacksSlider, PacksTable } from './components'
import { PacksModal } from './components/packs-modals'
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

  const handleOk = (id?: string, name?: string, isPrivate?: boolean) =>
    handleAddNewPack(id, name, isPrivate)

  const handleAddNewPackButtonClick = () => {
    showModal({
      title: 'Add New Pack',
      content: <PacksModal onOk={handleOk} />,
    })
  }

  return (
    <>
      <CardsHeader title={'Packs list'}>
        <StyledCardsTitleButton loading={isPacksDataLoading} onClick={handleAddNewPackButtonClick}>
          Add New Pack
        </StyledCardsTitleButton>
      </CardsHeader>

      <Skeleton loading={isPacksDataLoading} paragraph={{ rows: 0 }}>
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
      </Skeleton>

      <PacksTable packsTableData={packsTableData} />
    </>
  )
}
