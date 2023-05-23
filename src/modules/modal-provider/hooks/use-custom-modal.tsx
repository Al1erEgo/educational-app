/**
 * Represents the configuration for a modal.
 * @typedef {Object} ModalConfig
 * @property {string} title - The title of the modal.
 * @property {React.ReactNode} content - The content to be displayed in the modal.
 */

/**
 * The type of the modal context object returned by the custom hook.
 * @typedef {Object} ModalContextType
 * @property {ModalConfig} modalConfig - The current modal configuration.
 * @property {function} showModal - A function that displays a modal with the specified configuration.
 * @property {function} hideModal - A function that hides the currently displayed modal.
 * @property {Object} showModal - The configuration for the modal to be displayed.
 */

import React, { useState } from 'react'

import { ModalConfig, ModalContextType } from '@/modules/modal-provider/types'

/**
 A custom React hook for managing modal state.

 @returns {ModalContextType} An object containing the current modal configuration,
 as well as functions to show and hide the modal.
 */
export const useCustomModal = (): ModalContextType => {
  /**
   * The current modal configuration.
   * @type {ModalConfig}
   */

  const [modalConfig, setModalConfig] = useState<ModalConfig>({
    title: '',
    content: null,
  })
  /**
   * Shows a modal with the specified configuration.
   * @param {ModalConfig} config - The configuration for the modal to be displayed.
   */
  const showModal = (config: ModalConfig) => {
    setModalConfig(config)
  }
  /**
   * Hides the currently displayed modal.
   */
  const hideModal = () => {
    setModalConfig({
      title: '',
      content: null,
    })
  }

  return { modalConfig, showModal, hideModal }
}
