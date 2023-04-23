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
  minCardsCount: number
  maxCardsCount: number
}

export const PacksSlider: FC<PacksSliderType> = ({ minCardsCount, maxCardsCount, setState }) => {
  const [localState, setLocalState] = useState({ minCardsCount, maxCardsCount })
  const [debouncedState] = useDebounce([localState], 500)

  const onChange = useCallback((value: number | [number, number]) => {
    if (Array.isArray(value)) {
      setLocalState({ minCardsCount: value[0], maxCardsCount: value[1] })
    }
  }, [])

  // Send the updated state to the parent component only when it is debounced
  useEffect(() => {
    setState(prevState => ({
      ...prevState,
      minCardsCount: debouncedState.minCardsCount,
      maxCardsCount: debouncedState.maxCardsCount,
    }))
  }, [debouncedState, setState])

  return (
    <div style={{ width: '25%', maxWidth: '370px', marginRight: '10px' }}>
      <StyledCardsText>Number of cards</StyledCardsText>
      <Slider
        range={{ draggableTrack: true }}
        value={[localState.minCardsCount, localState.maxCardsCount]}
        step={1}
        onChange={onChange}
      />
    </div>
  )
}
