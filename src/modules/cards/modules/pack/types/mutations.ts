import { TableErrorType } from '../../../types'
import { usePackMutation } from '../hooks'

export type MutationsObjType = { [key: string]: ReturnType<typeof usePackMutation> }

export type MutationsWithConditionsType = [MutationsObjType, boolean, TableErrorType]
