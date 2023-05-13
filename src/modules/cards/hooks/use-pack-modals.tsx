import React from 'react'

import { useModalContext } from '../../modal-provider/hooks'
import { ModalDelete } from '../components'
import { PackMutationsObjType } from '../types'
import {
  PackModalsOnSubmitType,
  PackModalsPayloadType,
} from '../types/pack-modals'

type UsePackModalsType = (mutations: PackMutationsObjType) => {
  [key: string]: PackModalsOnSubmitType
}
export const usePackModals: UsePackModalsType = mutations => {
  const { showModal, hideModal } = useModalContext()
  const { addCard, deleteCard, updateCard, updatePack, deletePack } = mutations

  const deleteCardModal = (payload: PackModalsPayloadType) =>
    showModal({
      title: 'Delete Card',
      content: (
        <ModalDelete
          payload={payload}
          onSubmit={deleteCard.handler}
          onCancel={hideModal}
        />
      ),
    })

  return { deleteCardModal }
}
