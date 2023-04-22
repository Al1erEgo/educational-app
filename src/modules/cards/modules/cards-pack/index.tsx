import { useState } from 'react'

import { useParams, useSearchParams } from 'react-router-dom'

import { useAuthorised } from '../../../auth/hooks'
import { useCardsQuery } from '../../api'
import { CardsHeader, CardsSearch } from '../../components'
import { StyledCardsTitleButton, StyledCardsToolbar, StyledPacksContainer } from '../../styles'

import { PackTable } from './components'
import { HandleTableChangeType, PackTableParamsType } from './components/pack-table/types'
import { getSortParam } from './components/pack-table/utils'

export const CardsPack = () => {
  const { packId } = useParams()
  const { data: authData } = useAuthorised()
  const [searchParams, setSearchParams] = useSearchParams()
  const [tableParams, setTableParams] = useState<PackTableParamsType>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
    field: '',
    order: null,
  })

  const { data, isLoading, isFetching } = useCardsQuery({
    cardsPack_id: packId + '',
    page: tableParams.pagination?.current,
    pageCount: tableParams.pagination?.pageSize,
    sortCards: getSortParam(tableParams),
  })

  //TODO проверить работу условия, сейчас нет моих паков
  const titleButtonName = authData?._id === data?.packUserId ? 'Add new card' : 'Learn pack'

  const handleTableChange: HandleTableChangeType = (pagination, filters, sorter) => {
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
        isLoading={isLoading || isFetching}
        onTableChange={handleTableChange}
      />
    </StyledPacksContainer>
  )
}
