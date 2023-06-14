import { MAIN_PATH } from '@/constants'

export const CARD_PATH = {
  Root: '/',
  Learn: '/learn',
  Packs: '/packs',
  Pack: '/pack/:packId',
  Error: '*',
  // Pack2: id => `/pack/${id}`, TODO: use dynamic routes paths if you want
} as const

export const ABSOLUTE_CARD_PATH = {
  Learn: `${MAIN_PATH.Cards}${CARD_PATH.Learn}`,
  Packs: `${MAIN_PATH.Cards}${CARD_PATH.Packs}`,
  Pack: `${MAIN_PATH.Cards}${CARD_PATH.Pack}`,
}
