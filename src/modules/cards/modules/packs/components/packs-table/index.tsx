import { FC, useEffect, useState } from 'react'

import { DeleteOutlined, EditOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Space, Tooltip, Skeleton } from 'antd'

import { ErrorServerHandler } from '../../../../../../components'
import { useAuthorised } from '../../../../../auth/hooks'
import { useCardPacksQuery } from '../../../../api'
import { MY_BUTTON_NAME, windowHeight } from '../../../../constants'
import { StyledCardTable } from '../../../../styles'

type PacksTableProps = {
  activeButton: string
}

export const PacksTable: FC<PacksTableProps> = ({ activeButton }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(10)
  const [currentHeight, setCurrentHeight] = useState(windowHeight)
  const [sortPacks, setSortPacks] = useState('')

  const { data: userData } = useAuthorised()

  const user_id = userData?._id

  const { data, isLoading, isError, error } = useCardPacksQuery({
    page: currentPage,
    pageCount: pageCount,
    user_id: activeButton === MY_BUTTON_NAME ? user_id : undefined,
    sortPacks: sortPacks || undefined,
  })

  const handleSortChange = (pagination: any, filter: any, sorter: any) => {
    if (sorter.field) {
      if (sorter.order === 'ascend') {
        setSortPacks(`1${sorter.field}`)
      } else if (sorter.order === 'descend') {
        setSortPacks(`0${sorter.field}`)
      } else {
        setSortPacks('')
      }
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
    },
    {
      title: 'Cards',
      dataIndex: 'cardsCount',
      sorter: true,
    },
    {
      title: 'Last Updated',
      dataIndex: 'updated',
      sorter: true,
    },
    {
      title: 'Created By',
      dataIndex: 'user_name',
      sorter: true,
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (text: any, record: any) => {
        return activeButton === MY_BUTTON_NAME || record?.user_name === userData?.name ? (
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

  if (isError) {
    return <ErrorServerHandler error={error} />
  }

  const formattedData = data?.cardPacks.map((card: any) => ({
    key: card._id,
    name: card.name,
    cardsCount: card.cardsCount,
    updated: new Date(card.updated).toLocaleDateString('ru-RU'),
    user_name: card.user_name,
  }))

  return (
    <>
      {isLoading ? (
        <Skeleton paragraph={{ rows: pageCount }} active />
      ) : (
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
      )}
    </>
  )
}
