import { useState } from 'react'

import { DeleteOutlined, EditOutlined, InfoCircleOutlined, FilterOutlined } from '@ant-design/icons'
import { Button, Input, Slider, Space, Table, Tooltip, Typography } from 'antd'
import styled from 'styled-components'
const { Text, Title } = Typography

import { useCardPacksQuery } from './cards-api'

export const Cards = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageCount = 10
  const { data, isLoading, isError } = useCardPacksQuery({
    page: currentPage,
    pageCount: pageCount,
  })

  console.log('data', data)

  const handleLearn = (record: any) => {
    console.log('record', record)
  }
  const handleEdit = (record: any) => {
    console.log('record', record)
  }

  const handleDelete = (record: any) => {
    console.log('record', record)
  }

  const handleShowPacks = (e: any) => {
    console.log('e', e)
  }

  const handleFilter = (record: any) => {
    console.log('record', record)
  }

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber)
  }

  const columns: any = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Cards',
      dataIndex: 'cards',
      sorter: (a: any, b: any) => a.cards - b.cards,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Last Updated',
      dataIndex: 'lastUpdated',
      sorter: (a: any, b: any) => a.lastUpdated - b.lastUpdated,
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      sorter: (a: any, b: any) => a.createdBy.localeCompare(b.createdBy),
      sortDirections: ['ascend', 'descend'],
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (text: any, record: any) => (
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
      ),
    },
  ]

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching data</div>
  }

  const formattedData = data?.cardPacks.map((card: any) => ({
    key: card._id,
    name: card.name,
    cards: card.cardsCount,
    lastUpdated: new Date(card.updated).toLocaleDateString('ru-RU'),
    createdBy: card.user_name,
  }))

  return (
    <>
      <CardContainer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <Title level={2}>Packs list</Title>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={isLoading}
            style={{ fontWeight: '500', marginLeft: '10px', width: '200px' }}
            block
          >
            Add new pack
          </Button>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '24px',
          }}
        >
          <div style={{ marginRight: '10px', flexBasis: '40%' }}>
            <StyledCardText>Search</StyledCardText>
            <Input.Search />
          </div>

          <div style={{ marginRight: '10px' }}>
            <StyledCardText>Show packs</StyledCardText>
            <Space.Compact block>
              <Button type="primary" style={{ width: '100px' }} onClick={handleShowPacks}>
                My
              </Button>
              <Button style={{ width: '100px' }} onClick={handleShowPacks}>
                All
              </Button>
            </Space.Compact>
          </div>

          <div style={{ marginRight: '10px' }}>
            <StyledCardText>Number of cards</StyledCardText>
            <Slider
              range={{ draggableTrack: true }}
              defaultValue={[0, 100]}
              style={{ width: '200px' }}
            />
          </div>

          <FilterOutlined onClick={handleFilter} />
        </div>

        <StyledCardTable
          columns={columns}
          dataSource={formattedData}
          pagination={{
            showQuickJumper: true,
            onChange: handlePageChange,
            total: data?.cardPacksTotalCount || 0,
            pageSize: pageCount,
            current: currentPage,
          }}
          scroll={{ y: 500 }}
        />
      </CardContainer>
    </>
  )
}

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 136px;
  margin: 0;
`

export const StyledCardText = styled(Text)`
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
`

export const StyledCardTable = styled(Table)`
  margin-bottom: 24px;
`
