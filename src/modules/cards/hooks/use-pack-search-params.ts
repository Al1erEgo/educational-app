import { useParams, useSearchParams } from 'react-router-dom'

import { PackTableParamsType } from '@/modules/cards/types'

export const usePackSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams({})

  const { packId = '' } = useParams()
  const isOwnPack = searchParams.get('own') === 'true'
  const packName = searchParams.get('name') || ''
  const searchValue = searchParams.get('search') || ''
  const paginationCurrentPage = Number(searchParams.get('currentPage')) || undefined
  const paginationPageSize = Number(searchParams.get('pageSize')) || undefined

  const customSetSearchParams = (tableParams: PackTableParamsType) => {
    const params = new URLSearchParams()
    const { searchValue, pagination } = tableParams

    searchValue && params.set('search', searchValue)
    pagination?.current && params.set('currentPage', String(pagination.current))
    pagination?.pageSize && params.set('pageSize', String(pagination.pageSize))
    isOwnPack && params.set('own', String(isOwnPack))
    packName && params.set('name', packName)

    setSearchParams(params)
  }

  const tableSearchParams = {
    packId,
    isOwnPack,
    packName,
    searchValue,
    paginationCurrentPage,
    paginationPageSize,
  }

  return {
    searchParams: tableSearchParams,
    setSearchParams: customSetSearchParams,
  }
}
