import { useState } from 'react'

import { ModalConfig, ModalContextType, UseCustomModalType } from '@/modules/modal-provider/types'

/**
 A custom React hook for managing modal state.

 @returns {ModalContextType} An object containing the current modal configuration,
 as well as functions to show and hide the modal.
 */

export const useCustomModal: UseCustomModalType = () => {
  const [modalConfig, setModalConfig] = useState<ModalConfig>({
    title: '',
    content: null,
  })
  const showModal = (config: ModalConfig) => {
    setModalConfig(config)
  }
  const hideModal = () => {
    setModalConfig({
      title: '',
      content: null,
    })
  }

  return { modalConfig, showModal, hideModal }
}
