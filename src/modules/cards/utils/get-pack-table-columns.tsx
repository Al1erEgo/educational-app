import {
  DeleteCardRequestType,
  UpdateCardRequestType,
} from '@/modules/cards/api'
import { PackTableActions } from '@/modules/cards/components'
import { packTableColumns } from '@/modules/cards/constants'
import {
  CardsModalsHandlerType,
  PackTableColumnsType,
} from '@/modules/cards/types'

type GetTableColumnsType = (
  isMine: boolean,
  deleteCardModal: CardsModalsHandlerType<DeleteCardRequestType>,
  updateCard: CardsModalsHandlerType<UpdateCardRequestType>
) => PackTableColumnsType[]

export const getPackTableColumns: GetTableColumnsType = (
  isMine,
  deleteCardModal,
  updateCardModal
) => {
  if (isMine) {
    return [
      ...packTableColumns,
      {
        title: 'Actions',
        dataIndex: 'actions',
        width: '10%',
        render: (_, card) => (
          <PackTableActions
            card={card}
            updateCardModal={updateCardModal}
            deleteCardModal={deleteCardModal}
          />
        ),
      },
    ]
  }

  return packTableColumns
}
