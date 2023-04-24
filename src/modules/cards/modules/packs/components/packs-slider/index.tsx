import React, { FC, useCallback, useEffect, useState } from 'react'

import { Slider } from 'antd'
import { useDebounce } from 'usehooks-ts'

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
  const [localState, setLocalState] = useState({ minCount, maxCount })
  const [debouncedState] = useDebounce([localState], 500)

  /* console.log(minCount, maxCount)*/

  const onChange = useCallback((value: number | [number, number]) => {
    if (Array.isArray(value)) {
      setLocalState({ minCount: value[0], maxCount: value[1] })
    }
  }, [])

  // Send the updated state to the parent component only when it is debounced
  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      minCardsCount: debouncedState.minCount,
      maxCardsCount: debouncedState.maxCount,
    }))
  }, [debouncedState, setState])

  return (
    <div style={{ width: '25%', maxWidth: '370px', marginRight: '10px' }}>
      <StyledCardsText>Number of cards</StyledCardsText>
      <Slider
        range={{ draggableTrack: false }}
        defaultValue={[minCount, maxCount]}
        min={minCount}
        max={maxCount}
        step={1}
        onChange={onChange}
      />
    </div>
  )
}
