import { ReactNode } from 'react'

export type ModalConfig = {
  title: string
  content: ReactNode
}

export type ModalContextType = {
  showModal: (config: ModalConfig) => void
  hideModal: () => void
}
export type UseCustomModalType = () => ModalContextType & {
  modalConfig: ModalConfig
}
