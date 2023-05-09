import { createContext, useContext } from 'react'

import { ModalContextType } from '../types/types'

/**
 A context object for managing modal state and providing it to child components.
 @type {React.Context<ModalContextType>}
 */
export const ModalContext = createContext<ModalContextType>({
  modalConfig: {
    title: '',
    content: null,
  },
  showModal: () => {},
  hideModal: () => {},
})

/**
 A custom React hook that returns the current modal context.
 @returns {ModalContextType} An object containing the current modal configuration,
 as well as functions to show and hide the modal.
 */
export const useModalContext = () => useContext(ModalContext)
