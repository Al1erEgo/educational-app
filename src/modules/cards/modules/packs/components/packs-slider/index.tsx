import React, { FC } from 'react'

import { Slider } from 'antd'

import { StyledCardsText } from '../../../../styles'
import { useSliderKeyUpdater } from '../../hooks/use-slider-key-updater'
import { HandleSliderChangeType, PacksTableParamsType } from '../../types'

import { StyledPacksSliderWrapper } from './styles'

type PacksSliderType = {
  handleSliderChange: HandleSliderChangeType
  minCardsCount?: number
  maxCardsCount?: number
  state: PacksTableParamsType
}

export const PacksSlider: FC<PacksSliderType> = ({
  minCardsCount = 0,
  maxCardsCount = 110,
  handleSliderChange,
  state,
}) => {
  const sliderKey = useSliderKeyUpdater(minCardsCount, maxCardsCount, state)

  return (
    <StyledPacksSliderWrapper>
      <StyledCardsText>Number of cards</StyledCardsText>
      <Slider
        key={sliderKey}
        range={{ draggableTrack: false }}
        defaultValue={[minCardsCount, maxCardsCount]}
        min={minCardsCount}
        max={maxCardsCount}
        step={1}
        onAfterChange={handleSliderChange}
        disabled={minCardsCount === maxCardsCount}
      />
    </StyledPacksSliderWrapper>
  )
}
