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
  setModalConfig: any
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

/*
import { FC, ReactNode } from 'react'

import {
  CustomModal,
  ModalConfig,
  ModalContext,
} from '../modules/packs/components/packs-modal/custom-modal'

type ModalProviderProps = {
  children: ReactNode
  modalConfig: ModalConfig
  setModalConfig: (config: ModalConfig) => void
  restProps: any
}

export const ModalProvider: FC<ModalProviderProps> = ({
  children,
  modalConfig,
  setModalConfig,
  restProps,
}) => {
  return (
    <ModalContext.Provider value={{ modalConfig, setModalConfig }}>
      <CustomModal {...restProps} />
      {children}
    </ModalContext.Provider>
  )
}
*/
