import { confirmationMessagesArguments } from '../constants'

export type ConfirmationMessagesArgumentsType = Record<
  keyof typeof confirmationMessagesArguments,
  ConfirmationMessageType
>

type ConfirmationMessageType = {
  title: string
  redirectPath: string
  text: string
  image: string
  timer: boolean
}
