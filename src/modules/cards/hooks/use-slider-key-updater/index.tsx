import { useEffect, useState } from 'react'

/**
 A custom hook that updates the sliderKey state variable whenever minCount,
 maxCount. This hook updates
 the key used by a slider component to force a re-render based on changes to the
 minimum and maximum count values.

 @param minSlider
 @param maxSlider

 @return {number} - The current value of the sliderKey state variable.
 */
export const useSliderKeyUpdater = (
  minSlider: number | undefined,
  maxSlider: number | undefined
) => {
  /**
   * The current slider key.
   * @type {number}
   */
  const [sliderKey, setSliderKey] = useState(0)

  debugger
  console.log('minSliderSliderKey', minSlider)
  console.log('maxSliderSliderKey', maxSlider)

  /**
   * Updates the slider key whenever the minimum or maximum card count changes.
   */
  useEffect(() => {
    setSliderKey(prevState => prevState + 1)
  }, [minSlider, maxSlider])

  return sliderKey
}
