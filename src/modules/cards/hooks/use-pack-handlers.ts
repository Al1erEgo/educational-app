import { Dispatch, SetStateAction } from 'react'

import { useNavigate } from 'react-router-dom'

import { ABSOLUTE_CARD_PATH } from '../constants'
import {
  ButtonsHandlersType,
  CardsModalsHandlersType,
  CardsMutationsObjType,
  HandleSearchType,
  HandleTableChangeType,
  PackTableParamsType,
} from '../types'

import { useCardsModals } from './use-cards-modals'

import { MAIN_PATH } from '@/constants'
import { CardsResponseType } from '@/modules/cards/api'

type UsePackHandlersType = (
  setTableParams: Dispatch<SetStateAction<PackTableParamsType>>,
  mutations: CardsMutationsObjType,
  packId: string,
  packName: string,
  responseData?: CardsResponseType
) => {
  handleTableChange: HandleTableChangeType
  handleSearch: HandleSearchType
  buttonsHandlers: ButtonsHandlersType
  modalHandlers: CardsModalsHandlersType
}

export const usePackHandlers: UsePackHandlersType = (setTableParams, mutations, packId, packName, responseData) => {
  const navigate = useNavigate()
  const modalHandlers = useCardsModals(mutations)

  const handleRedirectToPacks = () => navigate(MAIN_PATH.Cards)

  const handleSearch: HandleSearchType = searchValue => setTableParams(prevState => ({ ...prevState, searchValue }))

  const handleTableChange: HandleTableChangeType = (pagination, filters, sorter) => {
    setTableParams(prevState => ({
      ...prevState,
      pagination,
      ...sorter,
    }))
  }

  const handleAddCard = () => modalHandlers.addCardModal({ card: { cardsPack_id: packId || '' } })

  const handleDeletePack = () => {
    modalHandlers.deletePackModal({ id: packId }, handleRedirectToPacks)
  }

  const handleEditPack = () =>
    modalHandlers.updatePackModal({
      cardsPack: {
        _id: packId,
        name: packName,
        deckCover: responseData?.packDeckCover,
        private: responseData?.packPrivate,
      },
    })

  const handleLearnPack = () => navigate(`${ABSOLUTE_CARD_PATH.Learn}/${packId}?name=${packName}`)

  const buttonsHandlers = {
    handleAddCard,
    handleEditPack,
    handleDeletePack,
    handleLearnPack,
  }

  return { handleTableChange, handleSearch, buttonsHandlers, modalHandlers }
}
