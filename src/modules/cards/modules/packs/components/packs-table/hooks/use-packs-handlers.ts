import { Dispatch, SetStateAction } from 'react'

import {
  ActionsHandlersType,
  HandlePacksSearchType,
  HandlePacksTableChangeType,
  MutationsWithConditionsPackType,
} from '../types'
import { PacksTableParamsType } from '../utils/get-sorting-packs-param'

type UsePacksHandlersType = (
  setPacksTableParams: Dispatch<SetStateAction<PacksTableParamsType>>,
  packsActions: MutationsWithConditionsPackType,
  packsId: string
) => {
  handlePacksTableChange: HandlePacksTableChangeType
  handlePacksSearch: HandlePacksSearchType
  handleAddNewPack: () => Promise<void>
  actionsHandlers: ActionsHandlersType
}

export const usePacksHandlers: UsePacksHandlersType = (
  setPacksTableParams,
  packsActions,
  packsId
) => {
  const [{ addPacks, updatePacks, deletePacks }] = packsActions
  const handlePacksSearch: HandlePacksSearchType = searchValue =>
    setPacksTableParams(prevState => ({ ...prevState, searchValue }))
  const handlePacksTableChange: HandlePacksTableChangeType = (pagination, filters, sorter) => {
    setPacksTableParams(prevState => ({
      ...prevState,
      pagination,
      ...sorter,
    }))
  }

  const handleAddNewPack = async () =>
    await addPacks.handlers({
      cardsPack: { name: `test pack ${Math.round(Math.random() + 100)}` },
    })

  const handleLearn = () => {
    console.log('record')
  }
  const handleEdit = async () =>
    await updatePacks.handlers({ cardsPack: { _id: packsId, name: 'new-name' } })

  const handleDelete = async () => await deletePacks.handlers({ id: packsId })

  const actionsHandlers = {
    handleLearn,
    handleEdit,
    handleDelete,
  }

  return { handlePacksTableChange, handlePacksSearch, handleAddNewPack, actionsHandlers }
}
