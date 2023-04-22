import { useState } from 'react'

import { SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/es/table/InternalTable'
import { useParams, useSearchParams } from 'react-router-dom'

import { useAuthorised } from '../../../auth/hooks'
import { useCardsQuery } from '../../api'
import { CardsHeader, CardsSearch } from '../../components'
import { StyledCardsTitleButton, StyledCardsToolbar, StyledPacksContainer } from '../../styles'

import { PackTable } from './components'
import { PackTableParams, TableCardType } from './components/pack-table/types'

export const CardsPack = () => {
  const { packId } = useParams()
  const { data: authData } = useAuthorised()
  const [searchParams, setSearchParams] = useSearchParams()
  const [tableParams, setTableParams] = useState<PackTableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  })

  const { data, isLoading } = useCardsQuery({
    cardsPack_id: packId + '',
    page: tableParams.pagination?.current,
    pageCount: tableParams.pagination?.pageSize,
  })

  //TODO проверить работу условия, сейчас нет моих паков
  const titleButtonName = authData?._id === data?.packUserId ? 'Add new card' : 'Learn pack'

  const handleTableChange = (
    pagination: TablePaginationConfig,
    //filters: Record<string, FilterValue>,
    sorter: SorterResult<TableCardType>
  ) => {
    setTableParams({
      pagination,
      ...sorter,
    })
  }

  return (
    <StyledPacksContainer>
      <CardsHeader title={'Pack'}>
        <StyledCardsTitleButton loading={isLoading}>{titleButtonName}</StyledCardsTitleButton>
      </CardsHeader>
      <StyledCardsToolbar>
        <CardsSearch size="big" />
      </StyledCardsToolbar>
      <PackTable
        data={data}
        tableParams={tableParams}
        isLoading={isLoading}
        onTableChange={handleTableChange}
      />
    </StyledPacksContainer>
  )
}
