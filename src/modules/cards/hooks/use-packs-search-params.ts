import { TablePaginationConfig } from 'antd/es/table/InternalTable'
import { useNavigate, useSearchParams } from 'react-router-dom'

export const usePacksSearchParams = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams({})

  const setSearchValue = (searchValue: string) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set('search', searchValue)

    setSearchParams(params)

    navigate(`/cards/packs?${params.toString()}`)
  }

  const setPagination = (pagination: TablePaginationConfig) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set('search', searchParams.get('search') || '')
    params.set('pagination', JSON.stringify(pagination))

    setSearchParams(params)

    navigate(`/cards/packs?${params.toString()}`)
  }

  return {
    searchParams,
    setSearchValue,
    setPagination,
  }
}
