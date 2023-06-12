import React, { FC } from 'react'

import { Slider } from 'antd'

import { StyledPacksSliderWrapper } from '@/modules/cards/components/packs-slider/styles'
import { useSliderKeyUpdater } from '@/modules/cards/hooks'
import { StyledCardsText } from '@/modules/cards/styles'
import { HandleSliderChangeType } from '@/modules/cards/types'

type PacksSliderType = {
  handleSliderChange: HandleSliderChangeType
  minSlider: number | undefined
  maxSlider: number | undefined
  isLoading: boolean
  minCardsCountValue: number | undefined
  maxCardsCountValue: number | undefined
}

export const PacksSlider: FC<PacksSliderType> = ({
  minCardsCountValue,
  maxCardsCountValue,
  minSlider = minCardsCountValue || 0,
  maxSlider = maxCardsCountValue || 0,
  handleSliderChange,
  isLoading,
}) => {
  const sliderKey = useSliderKeyUpdater(minSlider, maxSlider)

  debugger

  console.log('minSliderPacksSlider', minSlider)
  console.log('maxSliderPacksSlider', maxSlider)
  console.log('minCardsCountValuePacksSlider', minCardsCountValue)
  console.log('maxCardsCountValuePacksSlider', maxCardsCountValue)

  return (
    <StyledPacksSliderWrapper>
      <StyledCardsText>Number of cards</StyledCardsText>
      <Slider
        key={sliderKey}
        range={{ draggableTrack: false }}
        defaultValue={[minSlider, maxSlider]}
        min={minCardsCountValue}
        max={maxCardsCountValue}
        step={1}
        onAfterChange={handleSliderChange}
        disabled={minSlider === maxSlider || isLoading}
      />
    </StyledPacksSliderWrapper>
  )
}
