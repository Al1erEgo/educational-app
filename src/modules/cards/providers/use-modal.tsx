import React, { createContext, useContext, useState } from 'react'

export type ModalConfig = {
  title: string
  content: React.ReactNode
}

type ModalContextType = {
  modalConfig: ModalConfig
  showModal: (config: ModalConfig) => void
  hideModal: () => void
}

export const ModalContext = createContext<ModalContextType>({
  modalConfig: {
    title: '',
    content: null,
  },
  showModal: () => {},
  hideModal: () => {},
})

export const useModalContext = () => useContext(ModalContext)

export const useCustomModal = (): ModalContextType => {
  const [modalConfig, setModalConfig] = useState<ModalConfig>({
    title: '',
    content: null,
  })

  console.log('modalConfig', modalConfig)

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
