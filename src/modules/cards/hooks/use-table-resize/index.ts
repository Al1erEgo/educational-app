import { useEffect, useState } from 'react'

import { getTableHeight } from '../../modules/cards-pack/components/pack-table/utils'

/**
 * A React hook that returns the height of a table based on the current window height.
 *
 * @returns {number} The height of the table in pixels.
 */

export const useTableResize = () => {
  const [tableHeight, setTableHeight] = useState(getTableHeight(window.innerHeight))

  const handleResize = () => {
    setTableHeight(getTableHeight(window.innerHeight))
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [window.innerHeight])

  return tableHeight
}
