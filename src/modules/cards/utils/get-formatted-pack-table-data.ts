import { CardsResponseType } from '../api'
import { PackCardType } from '../types'

type getFormattedTableDataType = (
  tableData: CardsResponseType | undefined
) => PackCardType[] | undefined

export const getFormattedPackTableData: getFormattedTableDataType =
  tableData => {
    const formattedTableData = tableData?.cards.map(card => ({
      key: card._id,
      question: card.questionImg || card.question,
      answer: card.answerImg || card.answer,
      updated: new Date(card.updated).toLocaleDateString('ru-RU'),
      grade: card.grade,
    }))

    return formattedTableData
  }
