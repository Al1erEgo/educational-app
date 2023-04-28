import { Dispatch, SetStateAction } from 'react'

import { useNavigate } from 'react-router-dom'

import { MAIN_PATH } from '../../../../../../constants'
import { HandleTableChangeType, PackTableParamsType } from '../../components/pack-table/types'
import { HandleSearchType } from '../use-cards-pack-data'
import { ActionsWithConditionsType } from '../use-pack-actions'

export type ButtonsHandlersType = { [key: string]: () => void }

type UseTableHandlersType = (
  setTableParams: Dispatch<SetStateAction<PackTableParamsType>>,
  packActions: ActionsWithConditionsType,
  packId: string
) => {
  handleTableChange: HandleTableChangeType
  handleSearch: HandleSearchType
  buttonsHandlers: ButtonsHandlersType
}

export const useCardsPackHandlers: UseTableHandlersType = (setTableParams, packActions, packId) => {
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

  const buttonsHandlers = {
    handleAddCard,
    handleEditPack,
    handleDeletePack,
  }

  return { handleTableChange, handleSearch, buttonsHandlers }
}
