import { CardPacksResponseType, PackType } from '@/modules/cards/types'

export type getFormattedPacksTableDataType = (data: CardPacksResponseType | undefined) => PackType[] | undefined

export const getFormattedPacksTableData: getFormattedPacksTableDataType = data => {
  const formattedPacksTableData = data?.cardPacks.map(pack => ({
    key: pack._id,
    _id: pack._id,
    user_id: pack.user_id,
    name: pack.name,
    cardsCount: pack.cardsCount,
    created: new Date(pack.created).toLocaleDateString('ru-RU'),
    updated: new Date(pack.updated).toLocaleDateString('ru-RU'),
    user_name: pack.user_name,
    isPrivate: pack.private,
    deckCover: pack.deckCover,
  }))

  return formattedPacksTableData
}
