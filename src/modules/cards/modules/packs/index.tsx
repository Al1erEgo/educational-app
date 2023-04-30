import React, { useState } from 'react'

import { FilterValue, SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/lib'

import { useAuthorised } from '../../../auth/hooks'
import {
  useCardPacksQuery,
  useDeleteCardsPackMutation,
  useNewCardsPackMutation,
  useUpdateCardsPackMutation,
} from '../../api'
import { CardsHeader, CardsSearch } from '../../components'
import { MY_BUTTON_NAME } from '../../constants'
import { StyledCardsTitleButton, StyledCardsToolbar } from '../../styles'
import { HandleSearchType } from '../pack/types'

import { PacksButton, PacksFilter, PacksSlider, PacksTable } from './components'
import { usePacksData } from './components/packs-table/hooks/use-packs-data'

type PackType = {
  _id: string
  name: string
  cardsCount: number
  updated: string
  user_name: string
}

type SorterType = {
  field?: string
  order?: 'ascend' | 'descend'
}

export type StateType = {
  currentPage: number
  pageCount: number
  sortPacks: string
  searchValue: string
  minCardsCount?: number
  maxCardsCount?: number
  sliderKey: number
  isFiltered: boolean
}

export type SetStateType = React.Dispatch<React.SetStateAction<StateType>>
export const Packs = () => {
  const [{ actionsHandlers }, { handlePacksSearch }, packsTableData] = usePacksData()

  const [activeButton, setActiveButton] = useState<string>('All')

  const [state, setState] = useState<StateType>({
    currentPage: 1,
    pageCount: 10,
    sortPacks: '',
    searchValue: '',
    minCardsCount: undefined,
    maxCardsCount: undefined,
    sliderKey: 0,
    isFiltered: true,
  })

  const {
    currentPage,
    pageCount,
    sortPacks,
    searchValue,
    minCardsCount,
    maxCardsCount,
    sliderKey,
    isFiltered,
  } = state

  const [addNewCardPack, { isLoading: isAddNewPackLoading }] = useNewCardsPackMutation()

  const { data: userData } = useAuthorised()

  const user_id = userData?._id

  console.log('query args', {
    page: currentPage,
    pageCount: pageCount,
    user_id: activeButton === MY_BUTTON_NAME ? user_id : undefined,
    sortPacks: sortPacks || undefined,
    searchValue: searchValue || undefined,
    min: minCardsCount,
    max: maxCardsCount,
    sliderKey: sliderKey,
    isFiltered: isFiltered,
  })

  const { data, isLoading, isError, error, refetch, isFetching } = useCardPacksQuery({
    page: currentPage,
    pageCount: pageCount,
    user_id: activeButton === MY_BUTTON_NAME ? user_id : undefined,
    sortPacks: sortPacks || undefined,
    packName: searchValue || undefined,
    min: minCardsCount,
    max: maxCardsCount,
  })

  const minCount = data?.minCardsCount
  const maxCount = data?.maxCardsCount

  const [deleteCard] = useDeleteCardsPackMutation()

  const [updateCardsPack] = useUpdateCardsPackMutation()

  const handleSortChange = (
    pagination: TablePaginationConfig,
    filter: Record<string, FilterValue | null>,
    sorter: SorterResult<SorterType> | SorterResult<SorterType>[]
  ) => {
    if (Array.isArray(sorter)) return
    if (sorter.field) {
      if (sorter.order === 'ascend') {
        setState(prevState => ({ ...prevState, sortPacks: `1${sorter.field}` }))
      } else if (sorter.order === 'descend') {
        setState(prevState => ({ ...prevState, sortPacks: `0${sorter.field}` }))
      } else {
        setState(prevState => ({ ...prevState, sortPacks: '' }))
      }
    }
  }

  const handleLearn = (pack: PackType) => {
    console.log('record', pack)
  }
  const handleEdit = async (record: PackType) => {
    try {
      await updateCardsPack({
        cardsPack: {
          _id: record._id,
          name: 'new-name',
        },
      })
      refetch()
    } catch (error) {
      console.error('Error updating pack:', error)
    }
  }
  const handleDelete = async (record: PackType) => {
    try {
      await deleteCard({ id: record._id })
      await refetch()
    } catch (error) {
      console.error('Error deleting pack:', error)
    }
  }
  const handlePageChange = (page: number, pageCount?: number) => {
    setState(prevState => ({ ...prevState, currentPage: page }))
    if (pageCount) {
      setState(prevState => ({ ...prevState, pageCount: pageCount }))
    }
  }

  const handleAddNewPack = async () => {
    try {
      await addNewCardPack({
        cardsPack: { name: `test pack ${Math.round(Math.random() + 100)}` },
      })
      await refetch()
    } catch (error) {
      console.error(error)
    }
  }

  const setSearchParam: HandleSearchType = searchValue =>
    setState(prevState => ({ ...prevState, searchValue }))

  const clearFilters = () => {
    if (isFiltered) {
      setState(prevState => ({
        ...prevState,
        currentPage: 1,
        pageCount: 10,
        sortPacks: '',
        searchValue: '',
        minCardsCount: undefined,
        maxCardsCount: undefined,
        sliderKey: prevState.sliderKey + 1,
      }))
    }
  }

  const handleToggleButton = (buttonName: string) => {
    setActiveButton(buttonName)
    clearFilters()
  }

  console.log(packsTableData.packsTableParams.searchValue)

  return (
    <>
      <CardsHeader title={'Packs list'}>
        <StyledCardsTitleButton loading={isAddNewPackLoading} onClick={handleAddNewPack}>
          Add New Pack
        </StyledCardsTitleButton>
      </CardsHeader>

      <StyledCardsToolbar>
        <CardsSearch
          searchValue={packsTableData.packsTableParams.searchValue}
          onSearch={handlePacksSearch}
          placeholder={'Enter pack name'}
        />
        <PacksButton activeButton={activeButton} handleToggleButton={handleToggleButton} />
        <PacksSlider setState={setState} state={state} minCount={minCount} maxCount={maxCount} />
        <PacksFilter clearFilters={clearFilters} />
      </StyledCardsToolbar>

      <PacksTable
        activeButton={activeButton}
        currentPage={currentPage}
        pageCount={pageCount}
        userData={userData}
        data={data}
        sortPacks={sortPacks}
        handlePageChange={handlePageChange}
        handleSortChange={handleSortChange}
        handleLearn={handleLearn}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        error={error}
      />
    </>
  )
}
