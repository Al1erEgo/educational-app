import { FC } from 'react'

import { Image, Typography } from 'antd'

import { PACK_TABLE_IMG_HEIGHT } from '../../constants/pack-table-content-card'

const { Text } = Typography

type PackTableContentCardType = {
  content: string
}
export const PackTableContentCard: FC<PackTableContentCardType> = ({
  content,
}) => {
  if (content.startsWith('data:image'))
    return <Image src={content} height={PACK_TABLE_IMG_HEIGHT} />

  return <Text>{content}</Text>
}
