import React, { FC } from 'react'

import { Slider } from 'antd'

import { StyledPacksSliderWrapper } from '@/modules/cards/components/packs-slider/styles'
import { useSliderKeyUpdater } from '@/modules/cards/hooks'
import { StyledCardsText } from '@/modules/cards/styles'
import {
  HandleSliderChangeType,
  PacksTableParamsType,
} from '@/modules/cards/types'

type PacksSliderType = {
  handleSliderChange: HandleSliderChangeType
  minCardsCount?: number
  maxCardsCount?: number
  tableParams: PacksTableParamsType
  isLoading: boolean
  minSliderValue?: number
  maxSliderValue?: number
}

export const PacksSlider: FC<PacksSliderType> = ({
  minCardsCount = 0,
  maxCardsCount = 110,
  handleSliderChange,
  tableParams,
  isLoading,
  minSliderValue,
  maxSliderValue,
}) => {
  const sliderKey = useSliderKeyUpdater(
    minCardsCount,
    maxCardsCount,
    tableParams
  )

  debugger

  return (
    <StyledPacksSliderWrapper>
      <StyledCardsText>Number of cards</StyledCardsText>
      <Slider
        key={sliderKey}
        range={{ draggableTrack: false }}
        defaultValue={[minCardsCount, maxCardsCount]}
        min={minSliderValue}
        max={maxSliderValue}
        step={1}
        onAfterChange={handleSliderChange}
        disabled={minCardsCount === maxCardsCount || isLoading}
      />
    </StyledPacksSliderWrapper>
  )
}
