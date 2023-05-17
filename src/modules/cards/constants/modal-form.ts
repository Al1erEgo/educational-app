import * as yup from 'yup'

const imgRules = yup.string().required()
const textRules = yup.string().min(1).max(1000).required()

export const modalSchemaMap = {
  img: yup.object({
    questionImg: imgRules,
    answerImg: imgRules,
  }),
  text: yup.object({
    question: textRules,
    answer: textRules,
  }),
}
