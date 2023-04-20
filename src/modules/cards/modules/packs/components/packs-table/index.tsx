import { FC, useEffect, useState } from 'react'

import { DeleteOutlined, EditOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Space, Tooltip } from 'antd'

import { ErrorServerHandler, Loader } from '../../../../../../components'
import { useAuthorised } from '../../../../../auth/hooks'
import { useCardPacksQuery } from '../../../../api'
import { MY_BUTTON_NAME, windowHeight } from '../../../../constants'
import { StyledCardTable } from '../../../../styles'

type PacksTableProps = {
  activeButton: string
}

type SortDirections = {
  [key: string]: string
}
export const PacksTable: FC<PacksTableProps> = ({ activeButton }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(10)
  const [currentHeight, setCurrentHeight] = useState(windowHeight)
  const [sortPacks, setSortPacks] = useState('1updated')

  const { data: userData } = useAuthorised()

  const user_id = userData?._id

  const { data, isLoading, isError, error } = useCardPacksQuery({
    page: currentPage,
    pageCount: pageCount,
    user_id: activeButton === MY_BUTTON_NAME ? user_id : undefined,
    sortPacks: sortPacks || undefined,
  })

  const handleSortChange = (pagination: any, filter: any, sorter: any) => {
    console.log('sorter', sorter.field, sorter.order)
    if (sorter.field) {
      const sortDirections: SortDirections = {
        ascend: '0', // по возрастанию
        descend: '1', // по убыванию
      }
      const sortColumn = sorter.field
      const sortDirection = sortDirections[sorter.order]
      const currentSortPacks = `${sortDirection}${sortColumn}`
      const newSortPacks = currentSortPacks === '0lastUpdated' ? '1lastUpdated' : currentSortPacks

      setSortPacks(`${sortDirection}${sortColumn}`)
    }
  }

  const handleLearn = (record: any) => {
    console.log('record', record)
  }
  const handleEdit = (record: any) => {
    console.log('record', record)
  }
  const handleDelete = (record: any) => {
    console.log('record', record)
  }

  const handleResize = () => {
    setCurrentHeight(windowHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [window.innerHeight])

  const handlePageChange = (page: number, pageCount?: number) => {
    setCurrentPage(page)
    if (pageCount) {
      setPageCount(pageCount)
    }
  }

  const columns: any = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      /* sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend'],*/
    },
    {
      title: 'Cards',
      dataIndex: 'cards',
      sorter: true,
      /*  sorter: (a: any, b: any) => a.cards - b.cards,
      sortDirections: ['ascend', 'descend'],*/
    },
    {
      title: 'Last Updated',
      dataIndex: 'lastUpdated',
      sorter: true,
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      sorter: true,
      /* sorter: (a: any, b: any) => a.createdBy.localeCompare(b.createdBy),
      sortDirections: ['ascend', 'descend'],*/
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (text: any, record: any) => {
        return activeButton === MY_BUTTON_NAME || record?.createdBy === userData?.name ? (
          <Space size="middle">
            <Tooltip title="Learn">
              <InfoCircleOutlined onClick={() => handleLearn(record)} />
            </Tooltip>
            <Tooltip title="Edit">
              <EditOutlined onClick={() => handleEdit(record)} />
            </Tooltip>
            <Tooltip title="Delete">
              <DeleteOutlined onClick={() => handleDelete(record)} />
            </Tooltip>
          </Space>
        ) : (
          <Tooltip title="Learn">
            <InfoCircleOutlined onClick={() => handleLearn(record)} />
          </Tooltip>
        )
      },
    },
  ]

  /*  if (isLoading) {
    return <Loader isLoading={isLoading} />
  }*/

  if (isError) {
    return <ErrorServerHandler error={error} />
  }

  const formattedData = data?.cardPacks.map((card: any) => ({
    key: card._id,
    name: card.name,
    cards: card.cardsCount,
    lastUpdated: new Date(card.updated).toLocaleDateString('ru-RU'),
    createdBy: card.user_name,
  }))

  return (
    <Loader isLoading={isLoading}>
      <StyledCardTable
        size={'small'}
        columns={columns}
        dataSource={formattedData}
        onChange={handleSortChange}
        pagination={{
          pageSizeOptions: ['10', '20', '50'],
          showQuickJumper: true,
          onChange: handlePageChange,
          total: data?.cardPacksTotalCount || 0,
          current: currentPage,
          pageSize: pageCount,
          showSizeChanger: true,
        }}
        scroll={{
          y: currentHeight,
          scrollToFirstRowOnChange: true,
        }}
      />
    </Loader>
  )
}
