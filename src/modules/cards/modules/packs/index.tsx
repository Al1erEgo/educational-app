import React from 'react'

import { CardsHeader, CardsSearch } from '../../components'
import { useModalContext } from '../../providers'
import { StyledCardsTitleButton, StyledCardsToolbar } from '../../styles'

import { PacksButton, PacksFilter, PacksSlider, PacksTable } from './components'
import { AddNewPacksModal } from './components/packs-modal/add-new-packs-modal'
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

  const { setModalConfig } = useModalContext()
  const handleOk = (name: string, isPrivate?: boolean) => {
    handleAddNewPack(name)
  }

  return (
    <>
      <CardsHeader title={'Packs list'}>
        <StyledCardsTitleButton
          loading={isPacksDataLoading}
          onClick={() =>
            setModalConfig({
              title: 'Add New Pack',
              content: (
                <AddNewPacksModal
                  onOk={handleOk}
                  onCancel={() => setModalConfig({ title: '', content: null })}
                />
              ),
            })
          }
        >
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

/*
import React, { FC, useState } from 'react'

import { CardsHeader, CardsSearch } from '../../components'
import { StyledCardsTitleButton, StyledCardsToolbar } from '../../styles'

import { PacksButton, PacksFilter, PacksSlider, PacksTable } from './components'
import { usePacksData } from './hooks'

export const Packs: FC<PacksProps> = () => {
  const [
    { handlePacksSearch },
    packsTableData,
    { handleAddNewPack },
    { handleSliderChange },
    { handleToggleButton },
    { handleClearFilters },
  ] = usePacksData()

  const { isPacksDataLoading, packsTableParams, data } = packsTableData

  const [open, setOpen] = useState(false)
  const handleOk = (name: string, isPrivate?: boolean) => {
    handleAddNewPack(name)
    setOpen(false)
  }

  return (
    <>
      <CardsHeader title={'Packs list'}>
        <StyledCardsTitleButton
          loading={isPacksDataLoading}
          onClick={() => setOpen(true)}
        >
          Add New Pack
        </StyledCardsTitleButton>
      </CardsHeader>

      <AddNewPacksModal open={open} onCancel={() => setOpen(false)} onOk={handleOk} />

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
}*/

/*export const Packs = () => {
  const [
    { handlePacksSearch },
    packsTableData,
    { handleAddNewPack },
    { handleSliderChange },
    { handleToggleButton },
    { handleClearFilters },
  ] = usePacksData()

  const { isPacksDataLoading, packsTableParams, data } = packsTableData

  const [open, setOpen] = useState(false)

  const { modalConfig, setModalConfig } = useModalContext()
  const handleOk = (name: string, isPrivate?: boolean) => {
    handleAddNewPack(name)
  }

  return (
    <>
      <CardsHeader title={'Packs list'}>
        <StyledCardsTitleButton
          loading={isPacksDataLoading}
          onClick={() => setOpen(true)}
        >
          Add New Pack
        </StyledCardsTitleButton>
      </CardsHeader>


      <AddNewPacksModal
        open={open}
        onOk={(name: string, isPrivate?: boolean) => {
          handleOk(name, isPrivate);
          setOpen(false);
        }}
        onCancel={() => setOpen(false)}
      />

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
}*/
