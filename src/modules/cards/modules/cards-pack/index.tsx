import { useParams } from 'react-router-dom'

export const CardsPack = () => {
  const params = useParams()

  return <div>{params.packId}</div>
}
