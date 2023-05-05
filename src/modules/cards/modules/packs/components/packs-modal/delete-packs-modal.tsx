import React, { FC } from 'react'

import { Button } from 'antd'

import { useModalContext } from '../../../../providers/use-modal'

type DeleteModalProps = {
  onOk: (id?: string) => void
  packName?: string
}

export const DeleteModal: FC<DeleteModalProps> = ({ onOk, packName }) => {
  const { hideModal } = useModalContext()
  const handleOk = () => {
    onOk()
    hideModal()
  }
  const handleCancel = () => {
    hideModal()
  }

  return (
    <>
      <p>
        Are you sure you want to delete the pack <strong>{packName}</strong>?
      </p>

      <div style={{ marginTop: '16px', textAlign: 'right' }}>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button key="delete" type="primary" danger onClick={handleOk}>
          Delete
        </Button>
      </div>
    </>
  )
}

/*
import { FC } from 'react'

import { Modal, Button } from 'antd'

type DeleteModalProps = {
  open: boolean
  onCancel: () => void
  onOk: () => void
  packName: string | undefined
}

export const DeleteModal: FC<DeleteModalProps> = ({ open, onCancel, onOk, packName }) => {
  const handleOk = () => {
    onOk()
  }

  const handleCancel = () => {
    onCancel()
  }

  return (
    <Modal
      title="Delete Pack"
      open={open}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="delete" type="primary" danger onClick={handleOk}>
          Delete
        </Button>,
      ]}
    >
      <p>
        Are you sure you want to delete the pack <strong>{packName}</strong>?
      </p>
    </Modal>
  )
}
*/
