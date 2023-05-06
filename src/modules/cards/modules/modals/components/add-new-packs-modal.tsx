import React, { ChangeEvent, useState } from 'react'

import { Button, Input } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

import { StyledErrorText } from '../../../../auth/styles'
import { useModalContext } from '../hooks'
import { validateModalInputNameName } from '../utils/validate-modal-input-name'

import { StyledModalButtonsWrapper, StyledModalCheckbox, StyledModalOkButton } from './styles'

type AddNewPacksModalProps = {
  onOk: (name: string, isPrivate?: boolean) => void
}

export const AddNewPacksModal: React.FC<AddNewPacksModalProps> = ({ onOk }) => {
  const [packData, setPackData] = useState({
    name: '',
    isPrivate: false,
  })

  const [error, setError] = useState('')

  const { hideModal } = useModalContext()

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputPackName = event.target.value

    const nameError = validateModalInputNameName(inputPackName)

    setError(nameError)
    setPackData({ ...packData, name: inputPackName })
  }

  const handleCheckboxChange = (event: CheckboxChangeEvent) => {
    setPackData(prevState => ({ ...prevState, isPrivate: event.target.checked }))
  }

  const handleSave = () => {
    const nameError = validateModalInputNameName(packData.name)

    if (nameError) {
      setError(nameError)

      return
    }

    onOk(packData.name.trim(), packData.isPrivate)
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
      {error && <StyledErrorText>{error}</StyledErrorText>}

      <StyledModalCheckbox checked={packData.isPrivate} onChange={handleCheckboxChange}>
        Private Pack
      </StyledModalCheckbox>

      <StyledModalButtonsWrapper>
        <Button onClick={handleCancel}>Cancel</Button>
        <StyledModalOkButton onClick={handleSave} disabled={!packData.name}>
          Save
        </StyledModalOkButton>
      </StyledModalButtonsWrapper>
    </>
  )
}
