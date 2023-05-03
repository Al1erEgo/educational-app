import React, { ChangeEvent, FC, useState } from 'react'

import { Modal, Input, Checkbox, Button } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

type PacksModalProps = {
  open: boolean
  onCancel: () => void
  onOk: (id: string, name?: string) => void
  initialValue?: string
  id?: string
}

export const EditPacksModal: FC<PacksModalProps> = ({ open, onCancel, onOk, initialValue, id }) => {
  const [packData, setPackData] = useState<{ name: string | undefined; isPrivate: boolean }>({
    name: initialValue,
    isPrivate: false,
  })

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPackData(prev => ({ ...prev, name: event.target.value }))
  }

  const handleCheckboxChange = (event: CheckboxChangeEvent) => {
    setPackData(prev => ({ ...prev, isPrivate: event.target.checked }))
  }

  const handleOk = () => {
    if (id) {
      onOk(id, packData.name)
    }
    setPackData(prev => ({ ...prev, name: '', isPrivate: false }))
  }

  const handleCancel = () => {
    onCancel()
    setPackData(prev => ({ ...prev, name: '' }))
  }

  return (
    <Modal
      title="Edit Pack name"
      open={open}
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key="save" type="primary" onClick={handleOk} disabled={!packData.name}>
          Save
        </Button>,
      ]}
    >
      <Input placeholder="Pack Name" value={packData.name} onChange={handleNameChange} />
      <Checkbox checked={packData.isPrivate} onChange={handleCheckboxChange}>
        Private Pack
      </Checkbox>
    </Modal>
  )
}
