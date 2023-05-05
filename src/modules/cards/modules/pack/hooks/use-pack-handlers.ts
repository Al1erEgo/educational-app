import { Dispatch, SetStateAction } from 'react'

import { useNavigate } from 'react-router-dom'

import { MAIN_PATH } from '../../../../../constants'
import { ABSOLUTE_CARD_PATH } from '../../../constants'
import {
  MutationsWithConditionsType,
  ButtonsHandlersType,
  HandleSearchType,
  HandleTableChangeType,
  PackTableParamsType,
} from '../types'

type UsePackHandlersType = (
  setTableParams: Dispatch<SetStateAction<PackTableParamsType>>,
  packActions: MutationsWithConditionsType,
  packId: string
) => {
  handleTableChange: HandleTableChangeType
  handleSearch: HandleSearchType
  buttonsHandlers: ButtonsHandlersType
}

export const usePackHandlers: UsePackHandlersType = (setTableParams, packActions, packId) => {
  const navigate = useNavigate()
  const [{ addCard, updatePack, deletePack }] = packActions

  const handleSearch: HandleSearchType = searchValue =>
    setTableParams(prevState => ({ ...prevState, searchValue }))

  const handleTableChange: HandleTableChangeType = (pagination, filters, sorter) => {
    setTableParams(prevState => ({
      ...prevState,
      pagination,
      ...sorter,
    }))
  }

  const handleAddCard = () => addCard.handler({ card: { cardsPack_id: packId || '', grade: 4 } })
  const handleDeletePack = async () => {
    await deletePack.handler({ id: packId })
    navigate(MAIN_PATH.Cards) //можно перенести в хук useHandleAction
  }
  const handleEditPack = () => updatePack.handler({ cardsPack: { _id: packId } })

  const handleLearnPack = () => navigate(`${ABSOLUTE_CARD_PATH.Learn}/${packId}`)

  const buttonsHandlers = {
    handleAddCard,
    handleEditPack,
    handleDeletePack,
    handleLearnPack,
  }

  return { handleTableChange, handleSearch, buttonsHandlers }
}
