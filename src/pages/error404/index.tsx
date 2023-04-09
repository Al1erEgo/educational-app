import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

import { MAIN_PATH } from '../../constants'

export const Error404 = () => {
  const navigate = useNavigate()
  const onClickNavigateToMain = () => navigate(`${MAIN_PATH.Root}`)

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={onClickNavigateToMain} type="primary">
          Back Home
        </Button>
      }
    />
  )
}
