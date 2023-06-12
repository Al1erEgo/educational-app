import React, { FC } from 'react'

import { Slider } from 'antd'

import { StyledPacksSliderWrapper } from '@/modules/cards/components/packs-slider/styles'
import { useSliderKeyUpdater } from '@/modules/cards/hooks'
import { StyledCardsText } from '@/modules/cards/styles'
import { HandleSliderChangeType } from '@/modules/cards/types'

type PacksSliderType = {
  handleSliderChange: HandleSliderChangeType
  minCardsCount: number | undefined
  maxCardsCount: number | undefined
  isLoading: boolean
  minSliderUserValue: number | undefined
  maxSliderUserValue: number | undefined
}

export const PacksSlider: FC<PacksSliderType> = ({
  minSliderUserValue,
  maxSliderUserValue,
  minCardsCount = minSliderUserValue || 0,
  maxCardsCount = maxSliderUserValue || 0,
  handleSliderChange,
  isLoading,
}) => {
  const sliderKey = useSliderKeyUpdater(minCardsCount, maxCardsCount)

  return (
    <StyledPacksSliderWrapper>
      <StyledCardsText>Number of cards</StyledCardsText>
      <Slider
        key={sliderKey}
        range={{ draggableTrack: false }}
        defaultValue={[minCardsCount, maxCardsCount]}
        min={minSliderUserValue}
        max={maxSliderUserValue}
        step={1}
        onAfterChange={handleSliderChange}
        disabled={minCardsCount === maxCardsCount || isLoading}
      />
    </StyledPacksSliderWrapper>
  )
}
