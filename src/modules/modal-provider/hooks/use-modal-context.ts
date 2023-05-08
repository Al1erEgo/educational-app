import { createContext, useContext } from 'react'

import { ModalContextType } from '../types/types'

export const ModalContext = createContext<ModalContextType>({
  modalConfig: {
    title: '',
    content: null,
  },
  showModal: () => {},
  hideModal: () => {},
})

export const useModalContext = () => useContext(ModalContext)
