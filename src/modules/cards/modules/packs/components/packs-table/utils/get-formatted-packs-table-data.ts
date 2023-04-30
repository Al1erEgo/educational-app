import { CardPacksResponseType } from '../../../../../api'
import { PackType } from '../types'

export type getFormattedPacksTableDataType = (
  data: CardPacksResponseType | undefined
) => PackType[] | undefined

export const getFormattedPacksTableData: getFormattedPacksTableDataType = data => {
  const formattedPacksTableData =
    data?.cardPacks.map((pack: PackType) => ({
      key: pack._id,
      _id: pack._id,
      name: pack.name,
      cardsCount: pack.cardsCount,
      updated: new Date(pack.updated).toLocaleDateString('ru-RU'),
      user_name: pack.user_name,
      user_id: pack.user_id,
    })) || []

  return formattedPacksTableData
}
