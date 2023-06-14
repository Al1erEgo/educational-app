import { FC } from 'react'

import { Button, Result } from 'antd'

import { MAIN_PATH } from '@/constants'
import { useNavigateHandler } from '@/hooks'

export const Error404: FC = () => {
  const handleNavigateToMainPage = useNavigateHandler(MAIN_PATH.Root)

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button onClick={handleNavigateToMainPage} type="primary">
          Back Home
        </Button>
      }
    />
  )
}
