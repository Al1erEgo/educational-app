import React, { useState } from 'react'

import { ModalConfig, ModalContextType } from '../types/types'

export const useCustomModal = (): ModalContextType => {
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
