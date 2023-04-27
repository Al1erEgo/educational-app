import React, { FC, useEffect } from 'react'

import { DeleteOutlined, EditOutlined, InfoCircleOutlined } from '@ant-design/icons'
import { Space, Tooltip, Skeleton } from 'antd'
import { FilterValue, SorterResult } from 'antd/es/table/interface'
import { TablePaginationConfig } from 'antd/lib'
import { NavLink } from 'react-router-dom'

import { ErrorServerHandler } from '../../../../../../components'
import { StyledErrorText } from '../../../../../auth/styles'
import { MY_BUTTON_NAME, windowHeight } from '../../../../constants'
import { StyledCardTable } from '../../../../styles'
import { SetStateType } from '../../index'

import { PackType, SorterType, TableDataType } from './types'

type PacksTableProps = {
  activeButton: string
  currentHeight: number
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
  setState: SetStateType
}

export const PacksTable: FC<PacksTableProps> = ({
  activeButton,
  currentHeight,
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
  setState,
}) => {
  const columns: TableDataType[] = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: (text: string, record: PackType) => (
        <NavLink to={`/cards/packs/${record._id}/${record.name}`}>{text}</NavLink>
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

  const handleResize = () => {
    setState(prevState => ({ ...prevState, currentHeight: windowHeight }))
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [window.innerHeight])

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
            y: currentHeight,
            scrollToFirstRowOnChange: true,
          }}
        />
      )}
    </>
  )
}
