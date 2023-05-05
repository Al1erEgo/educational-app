import { usePacksMutation } from '../hooks'

import { PacksTableErrorType } from './packs-table'

export type MutationsPackObjType = { [key: string]: ReturnType<typeof usePacksMutation> }

export type MutationsWithConditionsPackType = [MutationsPackObjType, boolean, PacksTableErrorType]
