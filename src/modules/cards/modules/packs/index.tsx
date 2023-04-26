import React, { useState } from 'react'

import { FilterValue, SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/lib'

import { useAuthorised } from '../../../auth/hooks'
import { useCardPacksQuery, useDeleteCardsPackMutation, useNewCardsPackMutation } from '../../api'
import { CardsHeader, CardsSearch } from '../../components'
import { MY_BUTTON_NAME, windowHeight } from '../../constants'
import { StyledCardsTitleButton, StyledCardsToolbar } from '../../styles'
import { SetSearchParamType } from '../cards-pack/hooks'

import { PacksButton, PacksFilter, PacksSlider, PacksTable } from './components'

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
  currentHeight: number
  sortPacks: string
  searchValue: string
  minCardsCount: number
  maxCardsCount: number
  sliderKey: number
}

export type SetStateType = React.Dispatch<React.SetStateAction<StateType>>
export const Packs = () => {
  const [activeButton, setActiveButton] = useState<string>('All')

  const [state, setState] = useState<StateType>({
    currentPage: 1,
    pageCount: 10,
    currentHeight: windowHeight,
    sortPacks: '',
    searchValue: '',
    minCardsCount: 0,
    maxCardsCount: 110,
    sliderKey: 0,
  })

  const {
    currentPage,
    pageCount,
    currentHeight,
    sortPacks,
    searchValue,
    minCardsCount,
    maxCardsCount,
    sliderKey,
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
    min: minCardsCount ?? 0,
    max: maxCardsCount ?? 110,
    sliderKey: sliderKey,
  })

  const { data, isLoading, isError, error, refetch, isFetching } = useCardPacksQuery({
    page: currentPage,
    pageCount: pageCount,
    user_id: activeButton === MY_BUTTON_NAME ? user_id : undefined,
    sortPacks: sortPacks || undefined,
    packName: searchValue || undefined,
    min: minCardsCount ?? 0,
    max: maxCardsCount ?? 110,
  })

  const minCount = data?.minCardsCount ?? 0
  const maxCount = data?.maxCardsCount ?? 110

  const [deleteCard] = useDeleteCardsPackMutation()

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

  const handleLearn = (record: PackType) => {
    console.log('record', record)
  }
  const handleEdit = (record: PackType) => {
    console.log('record', record)
  }
  const handleDelete = async (record: PackType) => {
    await deleteCard({ id: record._id })
    await refetch()
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

  const setSearchParam: SetSearchParamType = searchValue =>
    setState(prevState => ({ ...prevState, searchValue }))

  return (
    <>
      <CardsHeader title={'Packs list'}>
        <StyledCardsTitleButton loading={isAddNewPackLoading} onClick={handleAddNewPack}>
          Add new pack
        </StyledCardsTitleButton>
      </CardsHeader>

      <StyledCardsToolbar>
        <CardsSearch searchData={state.searchValue} onSearch={setSearchParam} />
        <PacksButton activeButton={activeButton} setActiveButton={setActiveButton} />
        <PacksSlider key={sliderKey} setState={setState} minCount={minCount} maxCount={maxCount} />
        <PacksFilter setState={setState} />
      </StyledCardsToolbar>

      <PacksTable
        activeButton={activeButton}
        currentHeight={currentHeight}
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
        setState={setState}
      />
    </>
  )
}
