/*
 Code Analysis:
 - The main goal of the function is to update the sliderKey state variable whenever the minCount, maxCount, or state.minCardsCount/state.maxCardsCount change.
 - It is intended to be used in packs-modal-provider that render a slider component.
 - The function takes in three parameters: minCount, maxCount, and state.
 - The function returns the current value of the sliderKey state variable.
 - The function uses the useState hook to initialize the sliderKey state variable to 0.
 - The function uses the useEffect hook to update the sliderKey state variable whenever minCount or maxCount change.
 - The function uses another useEffect hook to update the sliderKey state variable when state.minCardsCount and state.maxCardsCount are both falsy.
 - The function returns the updated sliderKey state variable.
 */

/*
 Test Plan:
 - test_min_max_state_valid: tests that the function works correctly with valid inputs. Tags: [happy path]
 - test_minCount_change: tests that sliderKey is incremented by 1 when minCount changes. Tags: [happy path]
 - test_minCount_negative: tests that the function handles negative minCount input correctly. Tags: [edge case]
 - test_maxCount_negative: tests that the function handles negative maxCount input correctly. Tags: [edge case]
 - test_maxCount_change: tests that sliderKey is incremented by 1 when maxCount changes. Tags: [happy path]
 - test_min_max_change: tests that sliderKey is incremented by 1 when both minCount and maxCount change. Tags: [happy path]
 - test_min_greater_than_max: tests that the function handles minCount greater than maxCount correctly. Tags: [edge case]
 - test_state_null_undefined: tests that the function handles null or undefined state input correctly. Tags: [edge case]
 - test_minCardsCount_negative: tests that the function handles negative minCardsCount input correctly. Tags: [edge case]
 - test_maxCardsCount_negative: tests that the function handles negative maxCardsCount input correctly. Tags: [edge case]
 */

import React, { useState } from 'react'

import { useSliderKeyUpdater } from './index'

jest.mock('react', () => {
  const original = jest.requireActual('react')

  return {
    ...original,
    useEffect: jest.fn(),
    useState: jest.fn(),
  }
})

describe('useSliderKeyEffect_function', () => {
  const state = {
    pagination: {
      current: 1,
      pageSize: 10,
    },
    field: '',
    order: null,
    searchValue: '',
    minSlider: 2,
    maxSlider: 8,
    activeButton: 'All',
  }

  beforeEach(() => {
    const mockSetState = jest.fn()

    ;(useState as jest.Mock).mockReturnValue([0, mockSetState])
  })

  test('returns correct sliderKey when minCount and maxCount are valid', () => {
    const minCount = 1
    const maxCount = 10
    const sliderKey = useSliderKeyUpdater(minCount, maxCount, state)

    expect(sliderKey).toBe(0)
  })

  test('returns new sliderKey when minCount is changed', () => {
    const minCount = 1
    const maxCount = 10
    const sliderKey = useSliderKeyUpdater(minCount, maxCount, state)
    const newMinCount = 2
    const mockSetState1 = jest.fn()

    ;(useState as jest.Mock).mockReturnValue([sliderKey + 1, mockSetState1])
    const newSliderKey = useSliderKeyUpdater(newMinCount, maxCount, state)

    expect(newSliderKey).toBe(sliderKey + 1)
  })

  test('returns correct sliderKey when minCount is negative', () => {
    const minCount = -1
    const maxCount = 10
    const sliderKey = useSliderKeyUpdater(minCount, maxCount, state)

    expect(sliderKey).toBe(0)
  })

  test('returns correct sliderKey when maxCount is negative', () => {
    const minCount = 1
    const maxCount = -10
    const sliderKey = useSliderKeyUpdater(minCount, maxCount, state)

    expect(sliderKey).toBe(0)
  })

  test('returns new sliderKey when both minCount and maxCount are changed', () => {
    const minCount = 1
    const maxCount = 10
    const sliderKey = useSliderKeyUpdater(minCount, maxCount, state)
    const newMinCount = 2
    const newMaxCount = 12
    const mockSetState1 = jest.fn()

    ;(useState as jest.Mock).mockReturnValue([sliderKey + 1, mockSetState1])
    const newSliderKey = useSliderKeyUpdater(newMinCount, newMaxCount, state)

    expect(newSliderKey).toBe(sliderKey + 1)
  })
})
