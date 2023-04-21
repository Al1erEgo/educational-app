import { FC, useEffect, useState } from 'react'

import { DeleteOutlined, EditOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Space, Tooltip, Skeleton } from 'antd'
import { FilterValue, SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/lib'

import { ErrorServerHandler } from '../../../../../../components'
import { useAuthorised } from '../../../../../auth/hooks'
import { useCardPacksQuery, useDeleteCardsPackMutation } from '../../../../api'
import { MY_BUTTON_NAME, windowHeight } from '../../../../constants'
import { StyledCardTable } from '../../../../styles'

type PacksTableProps = {
  activeButton: string
}

type TableDataType = {
  title: string
  dataIndex: string
  sorter?: boolean
  render?: (text: string, record: any) => JSX.Element
}

type PackType = {
  _id: string
  name: string
  cardsCount: number
  updated: string
  user_name: string
}

type SorterType = {
  field?: string
  order?: 'ascend' | 'descend'
}

export const PacksTable: FC<PacksTableProps> = ({ activeButton }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [pageCount, setPageCount] = useState(10)
  const [currentHeight, setCurrentHeight] = useState(windowHeight)
  const [sortPacks, setSortPacks] = useState('')

  const { data: userData } = useAuthorised()

  const user_id = userData?._id

  const { data, isLoading, isError, error, refetch, isFetching } = useCardPacksQuery({
    page: currentPage,
    pageCount: pageCount,
    user_id: activeButton === MY_BUTTON_NAME ? user_id : undefined,
    sortPacks: sortPacks || undefined,
  })

  const [deleteCard, { isLoading: isLoadingWhenDelete, data: mutationData }] =
    useDeleteCardsPackMutation()

  console.log('mutationData', mutationData)

  const handleSortChange = (
    pagination: TablePaginationConfig,
    filter: Record<string, FilterValue | null>,
    sorter: SorterResult<SorterType> | SorterResult<SorterType>[]
  ) => {
    if (Array.isArray(sorter)) return
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
  const handleDelete = async (record: PackType) => {
    await deleteCard({ id: record._id })
    await refetch()
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

  const columns: TableDataType[] = [
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
      render: (text: string, record: PackType) => {
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

  const formattedData: PackType[] =
    data?.cardPacks.map((pack: PackType) => ({
      key: pack._id,
      _id: pack._id,
      name: pack.name,
      cardsCount: pack.cardsCount,
      updated: new Date(pack.updated).toLocaleDateString('ru-RU'),
      user_name: pack.user_name,
    })) || []

  return (
    <>
      {isLoading || isLoadingWhenDelete || isFetching ? (
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
