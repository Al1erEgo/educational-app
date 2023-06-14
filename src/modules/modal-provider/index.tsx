import { FC, PropsWithChildren, useState } from 'react'

import { Modal } from 'antd'

import { ModalContext } from './hooks'

import { ModalConfig } from '@/modules/modal-provider/types'

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [modalConfig, setModalConfig] = useState<ModalConfig | null>()

  const showModal = (config: ModalConfig) => {
    setModalConfig(config)
    setOpen(true)
  }

  const hideModal = () => {
    setOpen(false)
    setModalConfig(null)
  }

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      <Modal
        title={modalConfig?.title}
        open={open}
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
