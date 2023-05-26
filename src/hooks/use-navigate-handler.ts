import { useNavigate } from 'react-router-dom'

export const useNavigateHandler = (path: string) => {
  const navigate = useNavigate()

  return () => navigate(path)
}
