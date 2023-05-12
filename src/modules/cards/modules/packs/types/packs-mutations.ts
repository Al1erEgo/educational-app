import { TableErrorType } from '../../../types'
import { usePacksMutation } from '../hooks'

export type MutationsPackObjType = {
  [key: string]: ReturnType<typeof usePacksMutation>
}

export type MutationsWithConditionsPackType = [
  MutationsPackObjType,
  boolean,
  TableErrorType
]
