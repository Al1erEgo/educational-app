import { FC, ChangeEvent, useState } from 'react'

import { Modal, Input, Checkbox, Button } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

type PacksModalProps = {
  open: boolean
  onCancel: () => void
  onOk: (name: string, isPrivate?: boolean) => void
}

export const AddNewPacksModal: FC<PacksModalProps> = ({ open, onCancel, onOk }) => {
  const [packData, setPackData] = useState<{ name: string; isPrivate: boolean }>({
    name: '',
    isPrivate: false,
  })

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPackData(prevState => ({ ...prevState, name: event.target.value }))
  }

  const handleCheckboxChange = (event: CheckboxChangeEvent) => {
    setPackData(prevState => ({ ...prevState, isPrivate: event.target.checked }))
  }

  const handleOk = () => {
    onOk(packData.name, packData.isPrivate)
    setPackData({ name: '', isPrivate: false })
  }

  const handleCancel = () => {
    onCancel()
    setPackData({ name: '', isPrivate: false })
  }

  return (
    <Modal
      title="Add New Pack"
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
