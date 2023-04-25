import React, { FC, useCallback, useEffect } from 'react'

import { Slider } from 'antd'

import { StyledCardsText } from '../../../../styles'

type PacksSliderType = {
  setState: React.Dispatch<
    React.SetStateAction<{
      currentPage: number
      pageCount: number
      currentHeight: number
      sortPacks: string
      searchValue: string
      minCardsCount: number
      maxCardsCount: number
    }>
  >
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

  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      minCardsCount: 0,
      maxCardsCount: 110,
    }))
  }, [setState])

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
