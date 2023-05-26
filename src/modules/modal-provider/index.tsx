import { FC, PropsWithChildren } from 'react'

import { Modal } from 'antd'

import { ModalContext, useCustomModal } from './hooks'

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const { modalConfig, showModal, hideModal } = useCustomModal()

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      <Modal
        title={modalConfig.title}
        open={!!modalConfig.title}
        footer={null}
        onCancel={hideModal}
        destroyOnClose
      >
        {modalConfig.content}
      </Modal>
      {children}
    </ModalContext.Provider>
  )
}
