import { FC } from 'react'

import { Image, Typography } from 'antd'

import { PACK_TABLE_IMG_HEIGHT } from '@/modules/cards/constants'

const { Text } = Typography

type CardsContentCardType = {
  textContent?: string
  imgContent?: string
}
export const CardsTableContentCard: FC<CardsContentCardType> = ({
  textContent,
  imgContent,
}) => {
  if (imgContent)
    return (
      <div>
        <Image src={imgContent} height={PACK_TABLE_IMG_HEIGHT} />
      </div>
    )

  return <Text>{textContent}</Text>
}
