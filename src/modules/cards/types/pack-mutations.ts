import { useCardsMutation } from '../hooks'

import { TableErrorType } from './index'

export type PackMutationsObjType = {
  [key: string]: ReturnType<typeof useCardsMutation>
}

export type PacksMutationsWithConditionsType = [
  PackMutationsObjType,
  boolean,
  TableErrorType
]
