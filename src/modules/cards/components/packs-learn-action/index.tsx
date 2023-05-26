import { InfoCircleTwoTone } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { NavLink } from 'react-router-dom'

import { PackType } from '@/modules/cards/types'

type PacksLearnActionType = {
  pack: PackType
}
export const PacksLearnAction = ({ pack }: PacksLearnActionType) => {
  if (pack?.cardsCount) {
    return (
      <Tooltip title="Learn">
        <NavLink to={`/cards/learn/${pack?._id}?name=${pack?.name}`}>
          <InfoCircleTwoTone />
        </NavLink>
      </Tooltip>
    )
  } else {
    return (
      <Tooltip title="No pack to learn">
        <InfoCircleTwoTone twoToneColor="lightgrey" />
      </Tooltip>
    )
  }
}
