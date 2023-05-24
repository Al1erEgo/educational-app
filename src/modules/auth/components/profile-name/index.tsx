import { FC, useEffect, useState } from 'react'

import { CheckOutlined, CloseOutlined, EditOutlined } from '@ant-design/icons'
import { Form, Space } from 'antd'

import { StyledProfileNameButton } from './styles'

import { ErrorMessageHandler } from '@/components'
import { FormInput } from '@/modules/auth/components'
import { StyledUserName } from '@/modules/auth/components/auth-widget/styles'
import { useFormData } from '@/modules/auth/hooks'
import { UpdateUserNameType } from '@/modules/auth/types'

type ProfileNamePropsType = {
  userName?: string
}

export const ProfileName: FC<ProfileNamePropsType> = ({ userName }) => {
  const [
    onSubmit,
    { handleSubmit, control, errors, setValue },
    { error: updateUserNameError },
  ] = useFormData<UpdateUserNameType>('updateUserName')

  const [isEdit, setIsEdit] = useState(false)

  const editNameSubmit = () => {
    setIsEdit(false)
    setValue('name', userName)
  }

  useEffect(() => setValue('name', userName), [])

  return isEdit ? (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Form.Item
        validateStatus={errors.name ? 'error' : ''}
        help={errors.name?.message}
      >
        <Space.Compact
          style={{ width: '250px', height: '30px', marginBottom: '25px' }}
        >
          <FormInput name="name" control={control} />
          <StyledProfileNameButton onClick={editNameSubmit} danger>
            <CloseOutlined />
          </StyledProfileNameButton>
          <StyledProfileNameButton
            htmlType={'submit'}
            style={{ border: '1px solid #1677ff' }}
          >
            <Space>
              <CheckOutlined style={{ color: 'blue' }} />
            </Space>
          </StyledProfileNameButton>
        </Space.Compact>
      </Form.Item>
      <ErrorMessageHandler serverError={updateUserNameError} />
    </Form>
  ) : (
    <span style={{ marginBottom: '52px' }}>
      <StyledUserName
        style={{ fontSize: '1.2em' }}
        onClick={() => {
          setIsEdit(true)
        }}
      >
        {userName}
      </StyledUserName>
      <EditOutlined
        onClick={() => {
          setIsEdit(true)
        }}
        style={{ color: 'blue', cursor: 'pointer', fontSize: '16px' }}
      />
    </span>
  )
}
