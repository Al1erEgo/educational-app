import { useSearchParams } from 'react-router-dom'

import { PacksTableParamsType } from '@/modules/cards/types'

export const usePacksSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams({})

  const customSetSearchParams = (tableParams: PacksTableParamsType) => {
    const params = new URLSearchParams()
    const { searchValue, pagination, minSlider, maxSlider, activeButton } = tableParams

    searchValue && params.set('search', searchValue)
    pagination?.current && params.set('currentPage', String(pagination.current))
    pagination?.pageSize && params.set('pageSize', String(pagination.pageSize))

    minSlider && params.set('minSlider', String(minSlider))
    maxSlider && params.set('maxSlider', String(maxSlider))

    activeButton && params.set('showPacks', activeButton)

    setSearchParams(params)
  }

  const searchValueParams = searchParams.get('search') || ''
  const paginationCurrentPageParams = Number(searchParams.get('currentPage')) || undefined

  const paginationPageSizeParams = Number(searchParams.get('pageSize')) || undefined

  const minSliderParams = Number(searchParams.get('minSlider')) || undefined
  const maxSliderParams = Number(searchParams.get('maxSlider')) || undefined
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
