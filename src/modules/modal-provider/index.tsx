import { FC, PropsWithChildren, useState } from 'react'

import { Modal } from 'antd'

import { ModalContext } from './hooks'

import { ModalConfig } from '@/modules/modal-provider/types'

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [modalConfig, setModalConfig] = useState<ModalConfig | null>()

  const showModal = (config: ModalConfig) => {
    setModalConfig(config)
  }

  const hideModal = () => {
    setModalConfig(null)
  }

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      <Modal
        title={modalConfig?.title}
        open={!!modalConfig}
        footer={null}
        onCancel={hideModal}
        destroyOnClose
      >
        {modalConfig?.content}
      </Modal>
      {children}
    </ModalContext.Provider>
  )
}
