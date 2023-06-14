import { FC } from 'react'

import { Button, Result } from 'antd'

import { MAIN_PATH } from '@/constants'
import { useDoNavigate } from '@/hooks'

export const Error404Page: FC = () => {
  const handleNavigateToMainPage = useDoNavigate(MAIN_PATH.Root)

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
