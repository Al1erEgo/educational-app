import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Space, Tooltip } from 'antd'

import { LoginResponseType } from '@/modules/auth/types'
import { PacksLearnAction } from '@/modules/cards/components'
import { MY_BUTTON_NAME } from '@/modules/cards/constants'
import { CardsModalsHandlersType, PackType } from '@/modules/cards/types'

type PacksTableActionsType = {
  pack: PackType
  activeButton: string
  userData: LoginResponseType | undefined
} & Partial<CardsModalsHandlersType>

export const PacksTableActions = ({
  pack,
  activeButton,
  userData,
  deletePackModal,
  updatePackModal,
}: PacksTableActionsType) => {
  const isMyButton =
    activeButton === MY_BUTTON_NAME || pack?.user_id === userData?._id

  const handleEdit = () =>
    updatePackModal?.({
      cardsPack: {
        _id: pack?._id,
        name: pack?.name,
        private: pack?.isPrivate,
        deckCover: pack?.deckCover,
      },
    })

  const handleDelete = () =>
    deletePackModal?.({ id: pack?._id, name: pack?.name })

  if (!isMyButton) {
    return <PacksLearnAction pack={pack} />
  } else {
    return (
      <Space size="middle">
        <PacksLearnAction pack={pack} />

        <Tooltip title="Edit">
          <EditOutlined onClick={handleEdit} />
        </Tooltip>

        <Tooltip title="Delete">
          <DeleteOutlined onClick={handleDelete} />
        </Tooltip>
      </Space>
    )
  }
}
