import React from 'react'

export type ModalConfig = {
  title: string
  content: React.ReactNode
}

export type ModalContextType = {
  modalConfig: ModalConfig
  showModal: (config: ModalConfig) => void
  hideModal: () => void
}
