import { Dispatch, SetStateAction } from 'react'

import { useNavigate } from 'react-router-dom'

import { MAIN_PATH } from '@/constants'
import { ABSOLUTE_CARD_PATH } from '@/modules/cards/constants'
import { useCardsModals } from '@/modules/cards/hooks/use-cards-modals'
import {
  ButtonsHandlersType,
  CardsModalsHandlersType,
  CardsMutationsObjType,
  HandleSearchType,
  HandleTableChangeType,
  PackTableParamsType,
} from '@/modules/cards/types'

type UsePackHandlersType = (
  setTableParams: Dispatch<SetStateAction<PackTableParamsType>>,
  mutations: CardsMutationsObjType,
  packId: string,
  packName: string
) => {
  handleTableChange: HandleTableChangeType
  handleSearch: HandleSearchType
  buttonsHandlers: ButtonsHandlersType
  modalHandlers: CardsModalsHandlersType
}

export const usePackHandlers: UsePackHandlersType = (
  setTableParams,
  mutations,
  packId,
  packName
) => {
  const navigate = useNavigate()
  const { updateCards, deleteCards } = mutations
  const modalHandlers = useCardsModals(mutations)

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
    modalHandlers.addCardModal({ card: { cardsPack_id: packId || '' } })

  const handleDeletePack = async () => {
    await deleteCards.handler({ id: packId })
    navigate(MAIN_PATH.Cards) //можно перенести в хук useHandleAction
  }

  const handleEditPack = () =>
    updateCards.handler({ cardsPack: { _id: packId } })

  const handleLearnPack = () =>
    navigate(`${ABSOLUTE_CARD_PATH.Learn}/${packId}?name=${packName}`)

  const buttonsHandlers = {
    handleAddCard,
    handleEditPack,
    handleDeletePack,
    handleLearnPack,
  }

  return { handleTableChange, handleSearch, buttonsHandlers, modalHandlers }
}
