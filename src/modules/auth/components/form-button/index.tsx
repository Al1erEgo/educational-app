import { FC, PropsWithChildren } from 'react'

import { Button, Form } from 'antd'

import { buttonProps } from './constants'

type FormButtonPropsType = {
  loading: boolean
}

export const FormButton: FC<PropsWithChildren<FormButtonPropsType>> = ({ loading, children }) => {
  return (
    <Form.Item>
      <Button {...buttonProps} loading={loading}>
        {children}
      </Button>
    </Form.Item>
  )
}
