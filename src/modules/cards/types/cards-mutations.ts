import { useCardsMutation } from '@/modules/cards/hooks'
import { TableErrorType } from '@/modules/cards/types/cards-table-data'

export type CardsMutationsObjType = {
  [key: string]: ReturnType<typeof useCardsMutation>
}

export type CardsMutationsWithConditionsType = [CardsMutationsObjType, boolean, TableErrorType]
