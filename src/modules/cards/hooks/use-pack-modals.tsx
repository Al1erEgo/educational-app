import React from 'react'

import { useModalContext } from '../../modal-provider/hooks'
import {
  DeleteCardRequestType,
  NewCardRequestType,
  UpdateCardRequestType,
} from '../api'
import { ModalCard, ModalDelete } from '../components'
import { PackMutationsObjType } from '../types'
import {
  PackModalCardInitialValuesType,
  PackModalsHandlersType,
} from '../types/pack-modals'

type UsePackModalsType = (
  mutations: PackMutationsObjType
) => PackModalsHandlersType
export const usePackModals: UsePackModalsType = mutations => {
  const { showModal, hideModal } = useModalContext()
  const { addCard, deleteCard, updateCard, updatePack, deletePack } = mutations

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

  const updateCardModal = (
    payload: UpdateCardRequestType,
    initialValues: PackModalCardInitialValuesType
  ) => {
    showModal({
      title: 'Edit card',
      content: (
        <ModalCard
          payload={payload}
          initialValues={initialValues}
          onSubmit={addCard.handler}
          onCancel={hideModal}
        />
      ),
    })
  }

  return { addCardModal, updateCardModal, deleteCardModal }
}
