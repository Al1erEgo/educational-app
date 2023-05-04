import { MAIN_PATH } from '../../../constants'

export const CARD_PATH = {
  Root: '/',
  Learn: '/learn',
  Packs: '/packs',
  Pack: '/packs/:packId',
  Error: '*',
} as const

export const ABSOLUTE_CARD_PATH = {
  Learn: `${MAIN_PATH.Cards}${CARD_PATH.Learn}`,
  Packs: `${MAIN_PATH.Cards}${CARD_PATH.Packs}`,
  Pack: `${MAIN_PATH.Cards}${CARD_PATH.Pack}`,
}
