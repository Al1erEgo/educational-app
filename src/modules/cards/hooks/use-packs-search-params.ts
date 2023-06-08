import { useSearchParams } from 'react-router-dom'

import { PacksTableParamsType } from '@/modules/cards/types'

export const usePacksSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams({})

  const customSetSearchParams = (tableParams: PacksTableParamsType) => {
    const params = new URLSearchParams()
    const { searchValue, pagination, minSlider, maxSlider, activeButton } =
      tableParams

    searchValue && params.set('search', searchValue)
    pagination?.current && params.set('currentPage', String(pagination.current))
    pagination?.pageSize && params.set('pageSize', String(pagination.pageSize))

    minSlider && params.set('minSlider', String(minSlider))
    maxSlider && params.set('maxSlider', String(maxSlider))

    activeButton && params.set('showPacks', activeButton)

    setSearchParams(params)
  }

  /*  const updateSearchParams = (updateFn: (params: URLSearchParams) => void) => {
	 const params = new URLSearchParams(searchParams.toString())

	 updateFn(params)
	 setSearchParams(params)
	 }

	 const clearParams = () => {
	 setSearchParams(new URLSearchParams())
	 }

	 const setSearchValue = (searchValue: string) => {
	 updateSearchParams(params => {
	 params.set('search', searchValue)
	 })
	 }

	 const setPagination = (pagination: TablePaginationConfig) => {
	 updateSearchParams(params => {
	 params.set('currentPage', JSON.stringify(pagination.current))
	 params.set('pageSize', JSON.stringify(pagination.pageSize))
	 })
	 }

	 const setSliderChanged = ([minCardsCount, maxCardsCount]: [
	 number | undefined,
	 number | undefined
	 ]) => {
	 updateSearchParams(params => {
	 if (minCardsCount !== undefined) {
	 params.set('minCardsCount', String(minCardsCount))
	 }
	 if (maxCardsCount !== undefined) {
	 params.set('maxCardsCount', String(maxCardsCount))
	 }
	 })
	 }

	 const setToggleButton = (buttonName: string) => {
	 updateSearchParams(params => {
	 params.set('showPacks', buttonName)
	 })
	 }*/

  /*  const searchActions = {
	 clearParams,
	 setSearchValue,
	 setPagination,
	 setSliderChanged,
	 setToggleButton,
	 }*/

  const searchValueParams = searchParams.get('search') || ''
  const paginationCurrentPageParams =
    Number(searchParams.get('currentPage')) || undefined

  const paginationPageSizeParams =
    Number(searchParams.get('pageSize')) || undefined

  const minSliderParams = Number(searchParams.get('minCardsCount')) || undefined
  const maxSliderParams = Number(searchParams.get('maxCardsCount')) || undefined
  const activeButtonParams = searchParams.get('showPacks') || 'All'

  const tableSearchParams = {
    searchValueParams,
    paginationCurrentPageParams,
    paginationPageSizeParams,
    minSliderParams,
    maxSliderParams,
    activeButtonParams,
  }

  return {
    searchParams: tableSearchParams,
    setSearchParams: customSetSearchParams,
  }
}
