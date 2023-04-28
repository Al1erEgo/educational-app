import React, { FC, useCallback } from 'react'

import { Slider } from 'antd'

import { StyledCardsText } from '../../../../styles'
import { useSliderKeyEffect } from '../../hooks/use-slider-key-effect'
import { SetStateType, StateType } from '../../index'

type PacksSliderType = {
  state: StateType
  setState: SetStateType
  minCount?: number
  maxCount?: number
}

export const PacksSlider: FC<PacksSliderType> = ({
  minCount = 0,
  maxCount = 110,
  state,
  setState,
}) => {
  const sliderKey = useSliderKeyEffect(minCount, maxCount, state)

  const onChange = useCallback((value: number | [number, number]) => {
    if (Array.isArray(value)) {
      setState(prevState => ({
        ...prevState,
        minCardsCount: value[0],
        maxCardsCount: value[1],
      }))
    }
  }, [])

  return (
    <div style={{ width: '25%', maxWidth: '370px', marginRight: '10px' }}>
      <StyledCardsText>Number of cards</StyledCardsText>
      <Slider
        key={sliderKey}
        range={{ draggableTrack: false }}
        defaultValue={[minCount, maxCount]}
        min={minCount}
        max={maxCount}
        step={1}
        onAfterChange={onChange}
        disabled={minCount === maxCount}
      />
    </div>
  )
}
