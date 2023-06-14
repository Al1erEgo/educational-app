import { createContext, useContext } from 'react'

import { ModalContextType } from '@/types'

/**
 A context object for managing modal state and providing it to child components.
 @type {React.Context<ModalContextType>}
 */

export const ModalContext = createContext<ModalContextType>({
  showModal: () => {},
  hideModal: () => {},
})

/**
 A custom React hook that returns the current modal context.
 @returns {ModalContextType} An object containing functions to show and hide the modal.
 */
export const useModalContext = () => useContext(ModalContext)
