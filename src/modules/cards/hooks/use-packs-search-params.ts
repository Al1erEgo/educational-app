import { TablePaginationConfig } from 'antd/es/table/InternalTable'
import { useSearchParams } from 'react-router-dom'

export const usePacksSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams({})

  const setSearchValue = (searchValue: string) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set('search', searchValue)

    setSearchParams(params)
  }

  const setPagination = (pagination: TablePaginationConfig) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set('pagination', JSON.stringify(pagination))

    setSearchParams(params)
  }

  return {
    searchParams,
    setSearchValue,
    setPagination,
  }
}
