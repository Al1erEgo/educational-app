import React from 'react'

import { InfoCircleTwoTone } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'

import { PackType } from '@/modules/cards/types'

export const packsLearnAction = (hasCards: boolean, pack: PackType) => {
  if (hasCards) {
    return (
      <NavLink to={`/cards/learn/${pack?._id}?name=${pack?.name}`}>
        <InfoCircleTwoTone />
      </NavLink>
    )
  } else {
    return <InfoCircleTwoTone twoToneColor="lightgrey" />
  }
}
