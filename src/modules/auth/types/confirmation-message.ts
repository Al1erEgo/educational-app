import { confirmationMessagesArguments } from '../constants'

export type ConfirmationMessagesArgumentsType = {
  [key: keyof confirmationMessagesArguments]: ConfirmationMessageType
}

type ConfirmationMessageType = {
  title: string
  propsPath: string
  text: string
  image?: string
  timer?: boolean
}
