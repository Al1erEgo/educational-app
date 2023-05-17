import { CardsResponseType } from '../api'
import { PackCardType } from '../types'

type getFormattedTableDataType = (
  tableData: CardsResponseType | undefined
) => PackCardType[] | undefined

export const getFormattedPackTableData: getFormattedTableDataType =
  tableData => {
    const formattedTableData = tableData?.cards.map(card => ({
      key: card._id,
      question: card.question,
      answer: card.answer,
      questionImg: card.questionImg,
      answerImg: card.answerImg,
      updated: new Date(card.updated).toLocaleDateString('ru-RU'),
      grade: card.grade,
    }))

    return formattedTableData
  }
