import React, { FC } from 'react'

import { InfoCircleTwoTone } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { NavLink } from 'react-router-dom'

import { PackType } from '@/modules/cards/types'

type PacksLearnActionType = {
  hasCards: boolean
  pack: PackType
}
export const PacksLearnAction: FC<PacksLearnActionType> = ({
  hasCards,
  pack,
}) => {
  if (hasCards) {
    return (
      <Tooltip title="Learn">
        <NavLink to={`/cards/learn/${pack?._id}?name=${pack?.name}`}>
          <InfoCircleTwoTone />
        </NavLink>
      </Tooltip>
    )
  } else {
    return (
      <Tooltip title="No cards to learn">
        <InfoCircleTwoTone twoToneColor="lightgrey" />
      </Tooltip>
    )
  }
}
