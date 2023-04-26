import React, { FC, useCallback, useState } from 'react'

import { Slider } from 'antd'

import { StyledCardsText } from '../../../../styles'
import { SetStateType } from '../../index'

type PacksSliderType = {
  setState: SetStateType
  minCount: number
  maxCount: number
}

export const PacksSlider: FC<PacksSliderType> = ({ minCount, maxCount, setState }) => {
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
        range={{ draggableTrack: false }}
        defaultValue={[minCount, maxCount]}
        min={minCount}
        max={maxCount}
        step={1}
        onAfterChange={onChange}
      />
    </div>
  )
}
