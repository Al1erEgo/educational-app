import React from 'react'

import {
  DeleteCardRequestType,
  DeletedCardsPackRequestType,
  NewCardPacksRequestType,
  NewCardRequestType,
  UpdateCardRequestType,
  UpdateCardsPackRequestType,
} from '@/modules/cards/api'
import { ModalCard, ModalDelete, ModalPack } from '@/modules/cards/components'
import { CardsModalsHandlersType, CardsMutationsObjType } from '@/modules/cards/types'
import { useModalContext } from '@/modules/modal-provider/hooks'

type UseCardsModalsType = (mutations: CardsMutationsObjType) => CardsModalsHandlersType
export const useCardsModals: UseCardsModalsType = mutations => {
  const { showModal, hideModal } = useModalContext()
  const { addCard, deleteCard, updateCard, addCardsPack, updateCardsPack, deleteCardsPack } = mutations

  const deleteCardModal = (payload: DeleteCardRequestType) =>
    showModal({
      title: 'Delete card',
      content: <ModalDelete payload={payload} onSubmit={deleteCard.handler} onCancel={hideModal} />,
    })

  const addCardModal = (payload: NewCardRequestType) => {
    showModal({
      title: 'Add new card',
      content: <ModalCard payload={payload} onSubmit={addCard.handler} onCancel={hideModal} />,
    })
  }

  const updateCardModal = (payload: UpdateCardRequestType) => {
    showModal({
      title: 'Edit card',
      content: <ModalCard payload={payload} onSubmit={updateCard.handler} onCancel={hideModal} />,
    })
  }
  const deletePackModal = (payload: DeletedCardsPackRequestType, redirect?: () => void) =>
    showModal({
      title: 'Delete pack',
      content: (
        <ModalDelete payload={payload} onSubmit={deleteCardsPack.handler} onCancel={hideModal} redirect={redirect} />
      ),
    })

  const addPackModal = (payload: NewCardPacksRequestType) => {
    showModal({
      title: 'Add new pack',
      content: <ModalPack payload={payload} onSubmit={addCardsPack.handler} onCancel={hideModal} />,
    })
  }

  const updatePackModal = (payload: UpdateCardsPackRequestType) => {
    showModal({
      title: 'Edit pack',
      content: <ModalPack payload={payload} onSubmit={updateCardsPack.handler} onCancel={hideModal} />,
    })
  }

  return {
    addCardModal,
    updateCardModal,
    deleteCardModal,
    deletePackModal,
    addPackModal,
    updatePackModal,
  }
}
