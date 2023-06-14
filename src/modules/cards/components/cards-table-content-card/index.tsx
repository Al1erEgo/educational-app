import { FC } from 'react'

import { Image, Typography } from 'antd'

const { Text } = Typography

type CardsContentCardProps = {
  textContent?: string
  imgContent?: string
}

const CARDS_TABLE_IMG_HEIGHT = 70

export const CardsTableContentCard: FC<CardsContentCardProps> = ({ textContent, imgContent }) => {
  if (imgContent)
    return (
      <div>
        <Image src={imgContent} height={CARDS_TABLE_IMG_HEIGHT} />
      </div>
    )

  return <Text>{textContent}</Text>
}
