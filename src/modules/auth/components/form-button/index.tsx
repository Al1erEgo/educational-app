import { FC, PropsWithChildren } from 'react'

import { Button, Form } from 'antd'

type FormButtonPropsType = {
  loading: boolean
}

export const FormButton: FC<PropsWithChildren<FormButtonPropsType>> = ({ loading, children }) => {
  const buttonProps = {
    type: 'primary',
    htmlType: 'submit',
    size: 'large',
    style: { fontWeight: '500' },
    block: true,
  } as const

  return (
    <Form.Item>
      <Button {...buttonProps} loading={loading}>
        {children}
      </Button>
    </Form.Item>
  )
}
