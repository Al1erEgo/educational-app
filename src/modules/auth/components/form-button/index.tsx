import { FC, PropsWithChildren } from 'react'

import { Button, Form } from 'antd'

type FormButtonPropsType = {
  loading: boolean
}

const buttonProps = {
  type: 'primary',
  htmlType: 'submit',
  size: 'large',
  style: { fontWeight: '500' },
  block: true,
} as const

export const FormButton: FC<PropsWithChildren<FormButtonPropsType>> = ({ loading, children }) => {
  return (
    <Form.Item>
      <Button {...buttonProps} loading={loading}>
        {children}
      </Button>
    </Form.Item>
  )
}
