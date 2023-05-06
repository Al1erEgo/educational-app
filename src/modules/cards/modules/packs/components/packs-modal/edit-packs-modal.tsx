import React, { ChangeEvent, FC, useState } from 'react'

import { Input, Button } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

import { useModalContext } from '../../../../providers/use-modal'

import { StyledModalCheckbox, StyledOkButton } from './styles'

type PacksModalProps = {
  onOk: (id?: string, name?: string) => void
  id?: string
  packName?: string
}

export const EditPacksModal: FC<PacksModalProps> = ({ onOk, id, packName }) => {
  const [packData, setPackData] = useState({
    name: packName,
    isPrivate: false,
    id: id,
  })

  const { hideModal } = useModalContext()

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
    hideModal()
  }

  const handleCancel = () => {
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
