import React from 'react'

import { Modal } from 'antd'

import { useCustomModal, ModalContext } from './use-modal'

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

/*
 import React, { createContext, useContext, useState } from 'react'

 import { Modal } from 'antd'

 export type ModalConfig = {
 title: string
 content: React.ReactNode
 }

 type ModalContextType = {
 modalConfig: ModalConfig
 setModalConfig: React.Dispatch<React.SetStateAction<ModalConfig>>
 }

 export const ModalContext = createContext<ModalContextType>({
 modalConfig: {
 title: '',
 content: null,
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
 })

 return (
 <ModalContext.Provider value={{ modalConfig, setModalConfig }}>
 <Modal
 title={modalConfig.title}
 open={!!modalConfig.title}
 footer={null}
 onCancel={() => setModalConfig({ title: '', content: null })}
 >
 {modalConfig.content}
 </Modal>
 {children}
 </ModalContext.Provider>
 )
 }
 */

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
