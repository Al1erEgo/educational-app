import * as yup from 'yup'

export type ModalCardSchema = {
  question: yup.StringSchema
  answer: yup.StringSchema
  questionImg: yup.MixedSchema<FileList>
  answerImg: yup.MixedSchema<FileList>
}

export type ModalPackSchema = {
  name: yup.StringSchema
  deckCover?: yup.MixedSchema<FileList>
  private: yup.BooleanSchema
}

const imgRules = yup.string().required('Image required!')
const textRules = yup
  .string()
  .min(1)
  .max(1000)
  .required('Input should be filled in!')
const imgNameRules = yup.string()
const textNameRules = yup
  .string()
  .min(1)
  .max(100)
  .required('Input should be filled in!')

export const modalSchemaMap = {
  img: yup.object<ModalCardSchema>({
    questionImg: imgRules,
    answerImg: imgRules,
  }),
  text: yup.object<ModalCardSchema>({
    question: textRules,
    answer: textRules,
  }),
  imgPack: yup.object<ModalPackSchema>({
    name: textNameRules,
    deckCover: imgNameRules,
    private: yup.boolean(),
  }),
  textPack: yup.object<ModalPackSchema>({
    name: textNameRules,
    private: yup.boolean(),
  }),
}
