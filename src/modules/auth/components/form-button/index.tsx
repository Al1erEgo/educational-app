import { FC, PropsWithChildren } from 'react'

import { Form } from 'antd'

import { StyledAuthButton } from '@/modules/auth/styles'

type FormButtonProps = {
  loading: boolean
}

export const FormButton: FC<PropsWithChildren<FormButtonProps>> = ({ loading, children }) => {
  return (
    <Form.Item>
      <StyledAuthButton loading={loading}>{children}</StyledAuthButton>
    </Form.Item>
  )
}
