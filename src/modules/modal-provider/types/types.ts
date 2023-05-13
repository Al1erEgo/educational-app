import { ReactNode } from 'react'

export type ModalConfig = {
  title: string
  content: ReactNode
}

export type ModalContextType = {
  modalConfig: ModalConfig
  showModal: (config: ModalConfig) => void
  hideModal: () => void
}
