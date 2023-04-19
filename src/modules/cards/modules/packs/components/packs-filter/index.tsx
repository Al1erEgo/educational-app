import { FilterOutlined } from '@ant-design/icons'

export const PacksFilter = () => {
  const handleFilter = (record: any) => {
    console.log('record', record)
  }

  return <FilterOutlined onClick={handleFilter} />
}
