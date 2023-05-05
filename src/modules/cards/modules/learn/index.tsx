import { FC } from 'react'

import { useParams, useSearchParams } from 'react-router-dom'

import { useCardsPackQuery } from '../../api'
import { BackToCardsButton } from '../../components'
import { StyledTitle } from '../../styles'

export const Learn: FC = () => {
  const { packId = '' } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const packName = searchParams.get('name') || ''
  const { data, isLoading, error } = useCardsPackQuery({
    cardsPack_id: packId + '',
    pageCount: 200,
  })

  return (
    <>
      <BackToCardsButton />
      <StyledTitle>{packName}</StyledTitle>
    </>
  )
}
