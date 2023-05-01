import { FC, PropsWithChildren } from 'react'

import { Form } from 'antd'

import { StyledButton } from '../../styles'

type FormButtonPropsType = {
  loading: boolean
}

export const FormButton: FC<PropsWithChildren<FormButtonPropsType>> = ({ loading, children }) => {
  return (
    <Form.Item>
      <StyledButton loading={loading}>{children}</StyledButton>
    </Form.Item>
  )
}
