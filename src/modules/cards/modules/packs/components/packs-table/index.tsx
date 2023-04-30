import React, { FC } from 'react'

import { DeleteOutlined, EditOutlined, InfoCircleTwoTone } from '@ant-design/icons'
import { Space, Tooltip, Skeleton } from 'antd'
import { FilterValue, SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/lib'
import { NavLink } from 'react-router-dom'

import { ErrorServerHandler } from '../../../../../../components'
import { StyledErrorText } from '../../../../../auth/styles'
import { MY_BUTTON_NAME } from '../../../../constants'
import { useTableResize } from '../../../../hooks'
import { StyledCardTable } from '../../../../styles'

import { PackType, SorterType, TableDataType } from './types'

type PacksTableProps = {
  activeButton: string
  handlePageChange: (page: number, pageCount?: number) => void
  handleSortChange: (
    pagination: TablePaginationConfig,
    filter: Record<string, FilterValue | null>,
    sorter: SorterResult<SorterType> | SorterResult<SorterType>[]
  ) => void
  sortPacks: string
  handleLearn: (record: PackType) => void
  handleEdit: (record: PackType) => void
  handleDelete: (record: PackType) => void
  currentPage: number
  pageCount: number
  userData: any
  isError: boolean
  error: any
  data: any
  isLoading: boolean
  isFetching: boolean
}

export const PacksTable: FC<PacksTableProps> = ({
  activeButton,
  handlePageChange,
  handleSortChange,
  handleLearn,
  handleEdit,
  handleDelete,
  currentPage,
  pageCount,
  userData,
  isError,
  error,
  data,
  isLoading,
  isFetching,
}) => {
  const tableHeight = useTableResize()
  const columns: TableDataType[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: (text: string, record: PackType) => (
        <NavLink to={`/cards/packs/${record._id}`}>{text}</NavLink>
      ),
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
        const hasCards = record.cardsCount > 0

        return activeButton === MY_BUTTON_NAME || record?.user_id === userData?._id ? (
          <Space size="middle">
            <Tooltip title="Learn">
              {hasCards ? (
                <InfoCircleTwoTone onClick={() => handleLearn(record)} />
              ) : (
                <InfoCircleTwoTone twoToneColor="lightgrey" />
              )}
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
            {hasCards ? (
              <InfoCircleTwoTone onClick={() => handleLearn(record)} />
            ) : (
              <InfoCircleTwoTone twoToneColor="lightgrey" />
            )}
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
      user_id: pack.user_id,
    })) || []

  if (!isLoading && !isError && !data?.cardPacks.length) {
    return <StyledErrorText>No packs with the entered name were found (:</StyledErrorText>
  }

  return (
    <>
      {isLoading || isFetching ? (
        <Skeleton paragraph={{ rows: 10 }} active />
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
            y: tableHeight,
            scrollToFirstRowOnChange: true,
          }}
        />
      )}
    </>
  )
}
