import { FC, PropsWithChildren } from 'react'

import { Form } from 'antd'

import { StyledAuthButton } from '@/modules/auth/styles'

type FormButtonType = {
  loading: boolean
}

export const FormButton: FC<PropsWithChildren<FormButtonType>> = ({
  loading,
  children,
}) => {
  return (
    <Form.Item>
      <StyledAuthButton loading={loading}>{children}</StyledAuthButton>
    </Form.Item>
  )
}
