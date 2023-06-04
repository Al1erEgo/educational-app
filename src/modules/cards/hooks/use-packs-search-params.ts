import { TablePaginationConfig } from 'antd/es/table/InternalTable'
import { useSearchParams } from 'react-router-dom'

export const usePacksSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams({})

  const clearParams = () => {
    setSearchParams(new URLSearchParams({}))
  }
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

  const setSliderChanged = (
    sliderValues: [number | undefined, number | undefined]
  ) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set('minCardsCount', String(sliderValues[0]))
    params.set('maxCardsCount', String(sliderValues[1]))

    setSearchParams(params)
  }

  const setToggleButton = (buttonName: string) => {
    const params = new URLSearchParams(searchParams.toString())

    params.set('showPacks', buttonName)

    setSearchParams(params)
  }

  const searchActions = {
    setSearchValue,
    setPagination,
    setSliderChanged,
    setToggleButton,
    clearParams,
  }

  return {
    searchParams,
    searchActions,
  }
}
