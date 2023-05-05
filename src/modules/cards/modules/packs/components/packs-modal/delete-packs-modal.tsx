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
