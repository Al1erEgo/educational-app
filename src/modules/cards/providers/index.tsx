/*import React, { useState } from 'react'

import {
  CustomModal,
  ModalConfig,
  ModalContext,
} from '../modules/packs/components/packs-modal/custom-modal'
type ModalProviderProps = {
  children: React.ReactNode
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalConfig, setModalConfig] = useState<ModalConfig>({
    title: '',
    content: null,
    okText: '',
    cancelText: '',
  })

  const { title, content, okText, cancelText } = modalConfig

  return (
    <ModalContext.Provider value={setModalConfig}>
      <CustomModal
        title={title}
        content={content}
        okText={okText}
        cancelText={cancelText}
        open={!!title}
        onCancel={() => setModalConfig({})}
        onOk={() => setModalConfig({})}
      />
      {children}
    </ModalContext.Provider>
  )
}*/
import React, { createContext, useContext, useState } from 'react'

import { Modal } from 'antd'

export type ModalConfig = {
  title: string
  content: React.ReactNode
  okText: string
  cancelText: string
}

type ModalContextType = {
  modalConfig: ModalConfig
  setModalConfig: React.Dispatch<React.SetStateAction<ModalConfig>>
}

export const ModalContext = createContext<ModalContextType>({
  modalConfig: {
    title: '',
    content: null,
    okText: '',
    cancelText: '',
  },
  setModalConfig: () => {},
})

export const useModalContext = () => useContext(ModalContext)

type ModalProviderProps = {
  children: React.ReactNode
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modalConfig, setModalConfig] = useState<ModalConfig>({
    title: '',
    content: null,
    okText: '',
    cancelText: '',
  })

  return (
    <ModalContext.Provider value={{ modalConfig, setModalConfig }}>
      <Modal
        title={modalConfig.title}
        open={!!modalConfig.title}
        footer={null}
        okText={modalConfig.okText}
        cancelText={modalConfig.cancelText}
      >
        {modalConfig.content}
      </Modal>
      {children}
    </ModalContext.Provider>
  )
}
