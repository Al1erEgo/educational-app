import { useNavigate } from 'react-router-dom'

export const useNavigateToOnclick = (path: string) => {
  const navigate = useNavigate()

  return () => navigate(path)
}
