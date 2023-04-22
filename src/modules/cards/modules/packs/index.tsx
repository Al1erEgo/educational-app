import { useCallback, useEffect, useState } from 'react'

import { FilterValue, SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/lib'

import { useAuthorised } from '../../../auth/hooks'
import { useCardPacksQuery, useDeleteCardsPackMutation, useNewCardsPackMutation } from '../../api'
import { CardsHeader, CardsSearch } from '../../components'
import { MY_BUTTON_NAME, windowHeight } from '../../constants'
import { StyledCardsTitleButton, StyledCardsToolbar, StyledPacksContainer } from '../../styles'

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
export const Packs = () => {
  const [activeButton, setActiveButton] = useState('All')

  const [state, setState] = useState({
    currentPage: 1,
    pageCount: 10,
    currentHeight: windowHeight,
    sortPacks: '',
    searchValue: '',
  })

  console.log('pack render')

  const { currentPage, pageCount, currentHeight, sortPacks, searchValue } = state

  const [addNewCardPack, { isLoading: isAddNewPackLoading }] = useNewCardsPackMutation()

  const { data: userData } = useAuthorised()

  const user_id = userData?._id

  console.log('query args', {
    page: currentPage,
    pageCount: pageCount,
    user_id: activeButton === MY_BUTTON_NAME ? user_id : undefined,
    sortPacks: sortPacks || undefined,
    searchValue: searchValue || undefined,
  })

  const { data, isLoading, isError, error, refetch, isFetching } = useCardPacksQuery({
    page: currentPage,
    pageCount: pageCount,
    user_id: activeButton === MY_BUTTON_NAME ? user_id : undefined,
    sortPacks: sortPacks || undefined,
    packName: searchValue || undefined,
  })

  const handleSearch = useCallback(
    (value: string) => {
      setState(prevState => ({ ...prevState, searchValue: value }))
    },
    [setState]
  )

  const [deleteCard, { isLoading: isDeleteLoading }] = useDeleteCardsPackMutation()

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

  const handleResize = () => {
    setState(prevState => ({ ...prevState, currentHeight: windowHeight }))
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [window.innerHeight])

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

  return (
    <StyledPacksContainer>
      <CardsHeader title={'Packs list'}>
        <StyledCardsTitleButton loading={isAddNewPackLoading} onClick={handleAddNewPack}>
          Add new pack
        </StyledCardsTitleButton>
      </CardsHeader>

      <StyledCardsToolbar>
        <CardsSearch onSearch={handleSearch} />
        <PacksButton activeButton={activeButton} setActiveButton={setActiveButton} />
        <PacksSlider />
        <PacksFilter />
      </StyledCardsToolbar>

      <PacksTable
        activeButton={activeButton}
        currentHeight={currentHeight}
        handlePageChange={handlePageChange}
        handleSortChange={handleSortChange}
        sortPacks={sortPacks}
        handleLearn={handleLearn}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        isDeleteLoading={isDeleteLoading}
        currentPage={currentPage}
        pageCount={pageCount}
        userData={userData}
        isError={isError}
        error={error}
        data={data}
        isLoading={isLoading}
        isFetching={isFetching}
      />
    </StyledPacksContainer>
  )
}
