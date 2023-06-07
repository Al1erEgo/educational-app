import { useNavigate } from 'react-router-dom'

// TODO: rename to version without Handler word. example: use useDoNavigate
export const useNavigateHandler = (path: string) => {
  const navigate = useNavigate()

  return () => navigate(path)
}
