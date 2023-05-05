import { FC } from 'react'

import { Modal, Button } from 'antd'

type DeleteModalProps = {
  open: boolean
  onCancel: () => void
  onOk: () => void
}

export const DeleteModal: FC<DeleteModalProps> = ({ open, onCancel, onOk }) => {
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
      <p>Are you sure you want to delete this pack?</p>
    </Modal>
  )
}
