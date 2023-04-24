import React, { FC, useCallback, useEffect, useState } from 'react'

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
  const [localState, setLocalState] = useState({ minCount, maxCount })

  const onChange = useCallback((value: number | [number, number]) => {
    if (Array.isArray(value)) {
      setLocalState({ minCount: value[0], maxCount: value[1] })
    }
  }, [])

  const debounceTime = 500

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null

    const debounceState = () => {
      if (timeout) {
        clearTimeout(timeout)
      }
      timeout = setTimeout(() => {
        setState(prevState => ({
          ...prevState,
          minCardsCount: localState.minCount,
          maxCardsCount: localState.maxCount,
        }))
      }, debounceTime)
    }

    debounceState()

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [localState, setState])

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

/*const useDebouncedState = <T extends {}>(initialState: T, delay: number) => {
  const [state, setState] = useState<T>(initialState)
  const [debouncedState, setDebouncedState] = useState<T>(initialState)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedState(state)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [delay, state])

  return [state, debouncedState, setState] as const
}

export const PacksSlider: FC<PacksSliderType> = ({ minCount, maxCount, setState }) => {
  const [localState, debouncedState, setLocalState] = useDebouncedState({ minCount, maxCount }, 500)

  console.log(minCount, maxCount)

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
        range={{ draggableTrack: true }}
        defaultValue={[minCount, maxCount]}
        min={minCount}
        max={maxCount}
        step={1}
        onChange={onChange}
      />
    </div>
  )
}*/

/*export const PacksSlider: FC<PacksSliderType> = ({ minCount, maxCount, setState }) => {
  const [localState, setLocalState] = useState({ minCount, maxCount })
  const [debouncedState] = useDebounce([localState], 500)

  /!* console.log(minCount, maxCount)*!/

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
}*/
