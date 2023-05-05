import React, { ChangeEvent, FC, useState } from 'react'

import { Input, Checkbox, Button } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

import { useModalContext } from '../../../../providers/use-modal'

type PacksModalProps = {
  onOk: (id?: string, name?: string) => void
  initialValue?: string
  id?: string
}

export const EditPacksModal: FC<PacksModalProps> = ({ onOk, initialValue, id }) => {
  const [packData, setPackData] = useState({
    name: initialValue,
    isPrivate: false,
    id: '',
  })

  const { hideModal } = useModalContext()

  console.log('packDataEdit', packData)

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPackData(prevState => ({ ...prevState, name: event.target.value }))
  }

  const handleCheckboxChange = (event: CheckboxChangeEvent) => {
    setPackData(prevState => ({ ...prevState, isPrivate: event.target.checked }))
  }

  const handleOk = () => {
    if (id) {
      onOk(packData.id, packData.name)
    }
    setPackData(prevState => ({ ...prevState, name: '', isPrivate: false }))
    hideModal()
  }

  const handleCancel = () => {
    /*setPackData(prevState => ({ ...prevState, name: '' }))*/
    hideModal()
  }

  return (
    <>
      <Input placeholder="Pack Name" value={packData.name} onChange={handleNameChange} />
      <Checkbox checked={packData.isPrivate} onChange={handleCheckboxChange}>
        Private Pack
      </Checkbox>

      <div style={{ marginTop: '16px', textAlign: 'right' }}>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button
          onClick={handleOk}
          type="primary"
          disabled={!packData.name}
          style={{ marginLeft: '8px' }}
        >
          Save
        </Button>
      </div>
    </>
  )
}

/*import React, { ChangeEvent, FC, useState } from 'react'

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

  console.log('packData', packData)

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPackData(prevState => ({ ...prevState, name: event.target.value }))
  }

  const handleCheckboxChange = (event: CheckboxChangeEvent) => {
    setPackData(prevState => ({ ...prevState, isPrivate: event.target.checked }))
  }

  const handleOk = () => {
    if (id) {
      onOk(id, packData.name)
    }
    setPackData(prevState => ({ ...prevState, name: '', isPrivate: false }))
  }

  const handleCancel = () => {
    onCancel()
    setPackData(prevState => ({ ...prevState, name: '' }))
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
}*/
