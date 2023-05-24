import { useEffect, useState } from 'react'

import { PacksTableParamsType } from '@/modules/cards/types'

/**
 A custom hook that updates the sliderKey state variable whenever minCount,
 maxCount, or state.minCardsCount/state.maxCardsCount change. This hook updates
 the key used by a slider component to force a re-render based on changes to the
 minimum and maximum count values, as well as when those values are reset to their default state.

 @param {number} minCardsCount - The minimum number of cards that can be selected.
 @param {number} maxCardsCount - The maximum number of cards that can be selected.
 @param {object} state - The state object that contains the minCardsCount and
 maxCardsCount properties.

 @return {number} - The current value of the sliderKey state variable.
 */
export const useSliderKeyUpdater = (
  minCardsCount: number,
  maxCardsCount: number,
  state: PacksTableParamsType
) => {
  /**
   * The current slider key.
   * @type {number}
   */
  const [sliderKey, setSliderKey] = useState(0)

  /**
   * Updates the slider key whenever the minimum or maximum card count changes.
   */
  useEffect(() => {
    setSliderKey(prevState => prevState + 1)
  }, [minCardsCount, maxCardsCount])

  /**
   * Resets the slider key to 0 if the minimum and maximum card counts are both null.
   */
  useEffect(() => {
    if (!state.minCardsCount && !state.maxCardsCount) {
      setSliderKey(prevState => prevState + 1)
    }
  }, [state.minCardsCount, state.maxCardsCount])

  return sliderKey
}
