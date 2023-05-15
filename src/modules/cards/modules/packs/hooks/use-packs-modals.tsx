import React from 'react'

import { useModalContext } from '../../../../modal-provider/hooks'
import {
  DeletedCardsPackRequestType,
  NewCardPacksRequestType,
  UpdateCardsPackRequestType,
} from '../../../api'
import { ModalCard } from '../../../components'
import { ModalsDelete } from '../components/modal-delete'
import { MutationsPackObjType } from '../types'
import { PacksModalsHandlersType } from '../types/packs-modals'

type UsePackModalsType = (
  mutations: MutationsPackObjType
) => PacksModalsHandlersType
export const usePacksModals: UsePackModalsType = mutations => {
  const { showModal, hideModal } = useModalContext()
  const { addPacks, updatePacks, deletePacks } = mutations
  const deletePackModal = (payload: DeletedCardsPackRequestType) =>
    showModal({
      title: 'Delete pack',
      content: (
        <ModalsDelete
          payload={payload}
          onSubmit={deletePacks.handlers}
          onCancel={hideModal}
        />
      ),
    })

  const addPackModal = (payload: NewCardPacksRequestType) => {
    showModal({
      title: 'Add new card',
      content: (
        <ModalCard
          payload={payload}
          onSubmit={addPacks.handlers}
          onCancel={hideModal}
        />
      ),
    })
  }

  const updatePackModal = (payload: UpdateCardsPackRequestType) => {
    showModal({
      title: 'Edit card',
      content: (
        <ModalCard
          payload={payload}
          onSubmit={updatePacks.handlers}
          onCancel={hideModal}
        />
      ),
    })
  }

  return { addPackModal, updatePackModal, deletePackModal }
}
