import React, { FC, useEffect, useState } from 'react'

import { Slider } from 'antd'

import { StyledPacksSliderWrapper } from '@/modules/cards/components/packs-slider/styles'
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
  minCardsCountValue = 0,
  maxCardsCountValue = 0,
  minSlider,
  maxSlider,
  handleSliderChange,
  isLoading,
}) => {
  const [sliderValue, setSliderValue] = useState<[number, number] | undefined>()

  const handleChange = (value: [number, number] | undefined) => {
    setSliderValue(value)
  }

  useEffect(() => {
    setSliderValue([
      minSlider || minCardsCountValue,
      maxSlider || maxCardsCountValue,
    ])
  }, [minSlider, maxSlider, minCardsCountValue, maxCardsCountValue])

  return (
    <StyledPacksSliderWrapper>
      <StyledCardsText>Number of cards</StyledCardsText>
      <Slider
        range={{ draggableTrack: false }}
        defaultValue={[minCardsCountValue, maxCardsCountValue]}
        min={minCardsCountValue}
        max={maxCardsCountValue}
        value={sliderValue}
        step={1}
        onChange={handleChange}
        onAfterChange={handleSliderChange}
        disabled={minCardsCountValue === maxCardsCountValue || isLoading}
      />
    </StyledPacksSliderWrapper>
  )
}
