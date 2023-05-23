import { FC } from 'react'

import { Image, Typography } from 'antd'

import { PACK_TABLE_IMG_HEIGHT } from '../../constants'

const { Text } = Typography

type PackTableContentCardType = {
  textContent: string
  imgContent?: string
}
export const PackTableContentCard: FC<PackTableContentCardType> = ({
  textContent,
  imgContent,
}) => {
  if (imgContent)
    return <Image src={imgContent} height={PACK_TABLE_IMG_HEIGHT} />

  return <Text>{textContent}</Text>
}
