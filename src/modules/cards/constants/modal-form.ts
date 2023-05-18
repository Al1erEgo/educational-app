import * as yup from 'yup'

const imgRules = yup.string().required('Image required!')
const textRules = yup
  .string()
  .min(1)
  .max(1000)
  .required('Input should be filled!')

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
