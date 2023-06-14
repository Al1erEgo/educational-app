import { PackTableActions } from '@/modules/cards/components'
import { packTableColumns } from '@/modules/cards/constants'
import {
  CardsModalsHandlerType,
  DeleteCardRequestType,
  PackTableColumnsType,
  UpdateCardRequestType,
} from '@/modules/cards/types'

type GetPackTableColumnsType = (
  isMine: boolean,
  deleteCardModal: CardsModalsHandlerType<DeleteCardRequestType>,
  updateCard: CardsModalsHandlerType<UpdateCardRequestType>
) => PackTableColumnsType[]

export const getPackTableColumns: GetPackTableColumnsType = (isMine, deleteCardModal, updateCardModal) => {
  if (isMine) {
    return [
      ...packTableColumns,
      {
        title: 'Actions',
        dataIndex: 'actions',
        width: '10%',
        render: (_, card) => (
          <PackTableActions card={card} updateCardModal={updateCardModal} deleteCardModal={deleteCardModal} />
        ),
      },
    ]
  }

  return packTableColumns
}
