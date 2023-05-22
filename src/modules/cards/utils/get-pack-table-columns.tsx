import { DeleteCardRequestType, UpdateCardRequestType } from '../api'
import { PackTableActions } from '../components'
import { packTableColumns } from '../constants'
import { CardsModalsHandlerType, PackTableColumnsType } from '../types'

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
