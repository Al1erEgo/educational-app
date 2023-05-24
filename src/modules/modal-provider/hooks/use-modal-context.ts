import { createContext, useContext } from 'react'

import { ModalContextType } from '@/modules/modal-provider/types'

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
 @returns {ModalContextType} An object containing the current modal configuration,
 as well as functions to show and hide the modal.
 */
export const useModalContext = () => useContext(ModalContext)
