import { useEffect, useState } from 'react'

import { StateType } from '../../../../index'

/**
 A custom hook that updates the sliderKey state variable whenever minCount,
 maxCount, or state.minCardsCount/state.maxCardsCount change. This hook updates
 the key used by a slider component to force a re-render based on changes to the
 minimum and maximum count values, as well as when those values are reset to their default state.

 @param {number} minCount - The minimum number of cards that can be selected.
 @param {number} maxCount - The maximum number of cards that can be selected.
 @param {object} state - The state object that contains the minCardsCount and
 maxCardsCount properties.

 @return {number} - The current value of the sliderKey state variable.
 */
export const useSliderKeyUpdater = (minCount: number, maxCount: number, state: StateType) => {
  const [sliderKey, setSliderKey] = useState(0)

  useEffect(() => {
    setSliderKey(prevState => prevState + 1)
  }, [minCount, maxCount])

  useEffect(() => {
    if (!state.minCardsCount && !state.maxCardsCount) {
      setSliderKey(prevState => prevState + 1)
    }
  }, [state.minCardsCount, state.maxCardsCount])

  return sliderKey
}