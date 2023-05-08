import React, { ChangeEvent, FC, useCallback, useState } from 'react'

import { Input, Button } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

import { StyledErrorText } from '../../../../../auth/styles'
import { useModalContext } from '../../../../../modal-provider/hooks'
import { validateModalInputName } from '../../../../../modal-provider/utils'

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
    id,
    name: packName || '',
    isPrivate,
  })

  console.log('packData.name', packData.name)
  console.log('packName', packData.name)

  const { hideModal } = useModalContext()

  const [error, setError] = useState('')

  const isDisabled =
    (!packData.id && packData.name.trim().length === 0) ||
    (packData.id && packData.name === packName && packData.isPrivate === isPrivate) ||
    packData.name.length > 100

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputName = event.target.value

    const nameError = validateModalInputName(inputName)

    setError(nameError)
    setPackData(prevState => ({ ...prevState, name: inputName }))
  }

  const handleCheckboxChange = (event: CheckboxChangeEvent) => {
    setPackData(prevState => ({ ...prevState, isPrivate: event.target.checked }))
  }

  const handleSave = () => {
    const nameError = validateModalInputName(packData.name)

    if (nameError) {
      setError(nameError)

      return
    }

    if (editing) {
      onOk(packData.id, packData.name.trim(), packData.isPrivate)
      setPackData(prevState => ({
        ...prevState,
        name: packData.name.trim(),
        isPrivate: packData.isPrivate,
        id: packData.id,
      }))
    } else {
      onOk(undefined, packData.name.trim(), packData.isPrivate)
      setPackData(prevState => ({
        ...prevState,
        name: '',
        isPrivate: false,
        id: '',
      }))
    }
    hideModal()
  }

  const handleCancel = useCallback(() => {
    if (editing) {
      setPackData(prevState => ({
        name: packData.name.trim(),
        isPrivate: packData.isPrivate,
        id: packData.id,
      }))
      hideModal()
    } else {
      hideModal()
    }
  }, [setPackData, packName, isPrivate])

  return (
    <>
      <Input placeholder="Pack Name" value={packData.name} onChange={handleNameChange} />
      {error && <StyledErrorText>{error}</StyledErrorText>}

      <StyledModalCheckbox checked={packData.isPrivate} onChange={handleCheckboxChange}>
        Private Pack
      </StyledModalCheckbox>

      <StyledModalButtonsWrapper>
        <Button onClick={handleCancel}>Cancel</Button>
        <StyledModalOkButton onClick={handleSave} disabled={isDisabled}>
          Save
        </StyledModalOkButton>
      </StyledModalButtonsWrapper>
    </>
  )
}
