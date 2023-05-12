import { usePackMutation } from '../hooks'

import { TableErrorType } from './index'

export type PackMutationsObjType = {
  [key: string]: ReturnType<typeof usePackMutation>
}

export type PacksMutationsWithConditionsType = [
  PackMutationsObjType,
  boolean,
  TableErrorType
]
