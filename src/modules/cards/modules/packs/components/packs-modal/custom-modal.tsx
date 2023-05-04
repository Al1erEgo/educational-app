import React, { createContext, useContext } from 'react'

import { Modal } from 'antd'

type ModalConfig = {
  title: string
  content: React.ReactNode
  okText: string
  cancelText: string
}

type ModalContextType = {
  modalConfig: ModalConfig
  setModalConfig: any
}

const ModalContext = createContext<ModalContextType>({
  modalConfig: {
    title: '',
    content: null,
    okText: '',
    cancelText: '',
  },
  setModalConfig: () => {},
})

const useModalContext = () => useContext(ModalContext)

type ModalProps = ModalConfig & {
  open: boolean
  onCancel: () => void
  onOk: () => void
}

export const CustomModal: React.FC<ModalProps> = ({
  title,
  content,
  okText,
  cancelText,
  open,
  onCancel,
  onOk,
}) => {
  return (
    <Modal
      title={title}
      open={open}
      footer={null}
      okText={okText}
      cancelText={cancelText}
      onCancel={onCancel}
      onOk={onOk}
    >
      {content}
    </Modal>
  )
}
