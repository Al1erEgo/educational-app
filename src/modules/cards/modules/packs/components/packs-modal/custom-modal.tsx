import React, { createContext, useContext } from 'react'

import { Modal } from 'antd'

export type ModalConfig = {
  title?: string
  content?: React.ReactNode
  okText?: string
  cancelText?: string
}

type ModalContextType = React.Dispatch<React.SetStateAction<ModalConfig>> | undefined

const ModalContext = createContext<ModalContextType>(undefined)

const useModalContext = () => useContext(ModalContext)

type CustomModalProps = ModalConfig & {
  open: boolean
  onCancel: () => void
  onOk: () => void
}

const CustomModal: React.FC<CustomModalProps> = ({
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
