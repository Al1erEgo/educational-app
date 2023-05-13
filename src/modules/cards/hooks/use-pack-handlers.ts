import { Dispatch, SetStateAction } from 'react'

import { useNavigate } from 'react-router-dom'

import { MAIN_PATH } from '../../../constants'
import { ABSOLUTE_CARD_PATH } from '../constants'
import {
  ButtonsHandlersType,
  HandleSearchType,
  HandleTableChangeType,
  PacksMutationsWithConditionsType,
  PackTableParamsType,
} from '../types'

type UsePackHandlersType = (
  setTableParams: Dispatch<SetStateAction<PackTableParamsType>>,
  packMutations: PacksMutationsWithConditionsType,
  packId: string,
  packName: string
) => {
  handleTableChange: HandleTableChangeType
  handleSearch: HandleSearchType
  buttonsHandlers: ButtonsHandlersType
}

export const usePackHandlers: UsePackHandlersType = (
  setTableParams,
  packMutations,
  packId,
  packName
) => {
  const navigate = useNavigate()
  const [{ addCard, updatePack, deletePack }] = packMutations

  const handleSearch: HandleSearchType = searchValue =>
    setTableParams(prevState => ({ ...prevState, searchValue }))

  const handleTableChange: HandleTableChangeType = (
    pagination,
    filters,
    sorter
  ) => {
    setTableParams(prevState => ({
      ...prevState,
      pagination,
      ...sorter,
    }))
  }

  const handleAddCard = () =>
    addCard.handler({ card: { cardsPack_id: packId || '' } })
  const handleDeletePack = async () => {
    await deletePack.handler({ id: packId })
    navigate(MAIN_PATH.Cards) //можно перенести в хук useHandleAction
  }
  const handleEditPack = () =>
    updatePack.handler({ cardsPack: { _id: packId } })

  const handleLearnPack = () =>
    navigate(`${ABSOLUTE_CARD_PATH.Learn}/${packId}?name=${packName}`)

  const buttonsHandlers = {
    handleAddCard,
    handleEditPack,
    handleDeletePack,
    handleLearnPack,
  }

  return { handleTableChange, handleSearch, buttonsHandlers }
}
