import {
  DeletedCardsPackRequestType,
  NewCardPacksRequestType,
  UpdateCardsPackRequestType,
} from '../../../api'

export type PacksModalsOnSubmitType<T> = (payload: T) => void

export type PacksModalBaseType<T> = {
  payload: T
  onSubmit: PacksModalsOnSubmitType<T>
  onCancel: () => void
}

export type PacksModalPayloadType =
  | NewCardPacksRequestType
  | UpdateCardsPackRequestType

export type PacksModalsHandlerType<T> = PacksModalsOnSubmitType<T>

export type PacksModalsHandlersType = {
  addPackModal: PacksModalsHandlerType<NewCardPacksRequestType>
  updatePackModal: PacksModalsHandlerType<UpdateCardsPackRequestType>
  deletePackModal: PacksModalsHandlerType<
    DeletedCardsPackRequestType & {
      name?: string
    }
  >
}

export type ModalPackFormType = {
  name?: string
  deckCover?: string
  private?: boolean
}

export type ModalPackPictureType = {
  name?: string
  deckCover?: string
  private?: boolean
}

export type ModalPackFormatType = 'text' | 'picture'
