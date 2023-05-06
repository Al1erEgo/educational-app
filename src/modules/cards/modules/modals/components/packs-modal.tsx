import React, { ChangeEvent, FC, useState } from 'react'

import { Input, Button } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

import { StyledErrorText } from '../../../../auth/styles'
import { useModalContext } from '../hooks'
import { validateModalInputNameName } from '../utils/validate-modal-input-name'

import { StyledModalButtonsWrapper, StyledModalCheckbox, StyledModalOkButton } from './styles'

type PacksModalProps = {
  onOk: (id?: string, name?: string, isPrivate?: boolean) => void
  editing?: boolean
  id?: string
  packName?: string
  isPrivate?: boolean
}

export const PacksModal: FC<PacksModalProps> = ({ onOk, editing, id, packName, isPrivate }) => {
  const [packData, setPackData] = useState({
    name: packName || '',
    isPrivate: isPrivate || false,
    id: id || '',
  })

  const { hideModal } = useModalContext()

  const [error, setError] = useState('')

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.value

    const nameError = validateModalInputNameName(inputName)

    setError(nameError)
    setPackData({ ...packData, name: inputName })
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

    if (editing) {
      onOk(packData.id, packData.name.trim(), packData.isPrivate)
    } else {
      onOk(undefined, packData.name.trim(), packData.isPrivate)
    }

    setPackData({ name: '', isPrivate: false, id: '' })
    hideModal()
  }

  const handleCancel = () => {
    if (editing) {
      hideModal()
    } else {
      setPackData({ id: '', name: '', isPrivate: false })
      hideModal()
    }
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
