import { useEffect, useState } from 'react'

import { getTableHeight } from '../../modules/cards-pack/components/pack-table/utils'

export const useTableResize = () => {
  const [tableHeight, setTableHeight] = useState(getTableHeight(window.innerHeight))

  useEffect(() => {
    window.addEventListener('resize', () => setTableHeight(getTableHeight(window.innerHeight)))

    return () => {
      window.removeEventListener('resize', () => setTableHeight(getTableHeight(window.innerHeight)))
    }
  }, [window.innerHeight])

  return tableHeight
}
