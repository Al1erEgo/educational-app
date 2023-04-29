import { CardsResponseType } from '../../../api'
import { CardType } from '../types'

type getFormattedTableDataType = (
  tableData: CardsResponseType | undefined
) => CardType[] | undefined

export const getFormattedTableData: getFormattedTableDataType = tableData => {
  const formattedTableData = tableData?.cards.map(card => ({
    key: card._id,
    question: card.question,
    answer: card.answer,
    updated: new Date(card.updated).toLocaleDateString('ru-RU'),
    grade: card.grade,
  }))

  return formattedTableData
}
