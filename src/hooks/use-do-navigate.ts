import { useNavigate } from 'react-router-dom'

export const useDoNavigate = (path: string) => {
  const navigate = useNavigate()

  return () => navigate(path)
}
