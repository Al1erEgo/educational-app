export type CardsModalsOnSubmitType<T> = (payload: T) => void

export type CardsModalBaseType<T> = {
  payload: T
  onSubmit: CardsModalsOnSubmitType<T>
  onCancel: () => void
}

export type CardsModalsHandlerType<T> = CardsModalsOnSubmitType<T>
