import { Button, Result } from 'antd'

import { MAIN_PATH } from '../../constants'
import { useNavigateToOnclick } from '../../hooks'

export const Error404 = () => {
  const onClickNavigateToMain = useNavigateToOnclick(MAIN_PATH.Root)

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
