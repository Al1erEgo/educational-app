import React, { FC } from 'react'

import { Slider } from 'antd'

import { StyledCardsText } from '../../../../styles'

import { useSliderKeyUpdater } from './hooks/use-slider-key-updater'

type PacksSliderType = {
  handleSliderChange: any
  minCardsCount?: number
  maxCardsCount?: number
  state: any
}

export const PacksSlider: FC<PacksSliderType> = ({
  minCardsCount = 0,
  maxCardsCount = 110,
  handleSliderChange,
  state,
}) => {
  const sliderKey = useSliderKeyUpdater(minCardsCount, maxCardsCount, state)

  return (
    <div style={{ width: '25%', maxWidth: '370px', marginRight: '10px' }}>
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
    </div>
  )
}
