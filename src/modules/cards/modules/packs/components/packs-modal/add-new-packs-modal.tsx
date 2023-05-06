import React, { useState } from 'react'

import { Button, Input } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

import { useModalContext } from '../../../../providers/use-modal'

import { StyledModalCheckbox, StyledOkButton } from './styles'

type AddNewPacksModalProps = {
  onOk: (name: string, isPrivate?: boolean) => void
}

export const AddNewPacksModal: React.FC<AddNewPacksModalProps> = ({ onOk }) => {
  const [packData, setPackData] = useState({
    name: '',
    isPrivate: false,
  })

  const { hideModal } = useModalContext()

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPackData(prevState => ({ ...prevState, name: event.target.value }))
  }

  const handleCheckboxChange = (event: CheckboxChangeEvent) => {
    setPackData(prevState => ({ ...prevState, isPrivate: event.target.checked }))
  }

  const handleOk = () => {
    onOk(packData.name, packData.isPrivate)
    setPackData({ name: '', isPrivate: false })
    hideModal()
  }

  const handleCancel = () => {
    setPackData({ name: '', isPrivate: false })
    hideModal()
  }

  return (
    <>
      <Input placeholder="Pack Name" value={packData.name} onChange={handleNameChange} />
      <StyledModalCheckbox checked={packData.isPrivate} onChange={handleCheckboxChange}>
        Private Pack
      </StyledModalCheckbox>

      <div style={{ marginTop: '16px', textAlign: 'right' }}>
        <Button onClick={handleCancel}>Cancel</Button>
        <StyledOkButton onClick={handleOk} disabled={!packData.name}>
          Save
        </StyledOkButton>
      </div>
    </>
  )
}
