import React from 'react'

import { Modal } from 'antd'

import { useCustomModal, ModalContext } from './hooks'

type ModalProviderProps = {
  children: React.ReactNode
}
export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const { modalConfig, showModal, hideModal } = useCustomModal()

  return (
    <ModalContext.Provider value={{ modalConfig, showModal, hideModal }}>
      <Modal
        title={modalConfig.title}
        open={!!modalConfig.title}
        footer={null}
        onCancel={hideModal}
      >
        {modalConfig.content}
      </Modal>
      {children}
    </ModalContext.Provider>
  )
}
