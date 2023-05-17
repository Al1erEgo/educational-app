import React from 'react'

import { useModalContext } from '../../modal-provider/hooks'
import {
  DeleteCardRequestType,
  DeletedCardsPackRequestType,
  NewCardPacksRequestType,
  NewCardRequestType,
  UpdateCardRequestType,
  UpdateCardsPackRequestType,
} from '../api'
import { ModalCard, ModalDelete } from '../components'
import { ModalPack } from '../modules/packs/components/modal-pack'
import { PackMutationsObjType } from '../types'
import { PackModalsHandlersType } from '../types/pack-modals'

type UsePackModalsType = (
  mutations: PackMutationsObjType
) => PackModalsHandlersType
export const usePackModals: UsePackModalsType = mutations => {
  const { showModal, hideModal } = useModalContext()
  const { addCard, deleteCard, updateCard, addPack, updatePack, deletePack } =
    mutations

  const deleteCardModal = (payload: DeleteCardRequestType) =>
    showModal({
      title: 'Delete card',
      content: (
        <ModalDelete
          payload={payload}
          onSubmit={deleteCard.handler}
          onCancel={hideModal}
        />
      ),
    })

  const addCardModal = (payload: NewCardRequestType) => {
    showModal({
      title: 'Add new card',
      content: (
        <ModalCard
          payload={payload}
          onSubmit={addCard.handler}
          onCancel={hideModal}
        />
      ),
    })
  }

  const updateCardModal = (payload: UpdateCardRequestType) => {
    showModal({
      title: 'Edit card',
      content: (
        <ModalCard
          payload={payload}
          onSubmit={updateCard.handler}
          onCancel={hideModal}
        />
      ),
    })
  }
  const deletePackModal = (payload: DeletedCardsPackRequestType) =>
    showModal({
      title: 'Delete pack',
      content: (
        <ModalDelete
          payload={payload}
          onSubmit={deletePack.handler}
          onCancel={hideModal}
        />
      ),
    })

  const addPackModal = (payload: NewCardPacksRequestType) => {
    showModal({
      title: 'Add new pack',
      content: (
        <ModalPack
          payload={payload}
          onSubmit={addPack.handler}
          onCancel={hideModal}
        />
      ),
    })
  }

  const updatePackModal = (payload: UpdateCardsPackRequestType) => {
    showModal({
      title: 'Edit pack',
      content: (
        <ModalPack
          payload={payload}
          onSubmit={updatePack.handler}
          onCancel={hideModal}
        />
      ),
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
