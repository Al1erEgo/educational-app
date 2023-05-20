import { useCardsMutation } from '../hooks'

import { TableErrorType } from './index'

export type CardsMutationsObjType = {
  [key: string]: ReturnType<typeof useCardsMutation>
}

export type CardsMutationsWithConditionsType = [
  CardsMutationsObjType,
  boolean,
  TableErrorType
]
