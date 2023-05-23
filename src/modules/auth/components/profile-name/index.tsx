import { FC, useEffect, useState } from 'react'

import { CheckOutlined, EditOutlined, CloseOutlined } from '@ant-design/icons'
import { Form, Space } from 'antd'

import { useFormData } from '../../hooks'
import { UpdateUserNameType } from '../../types'
import { StyledUserName } from '../auth-widget/styles'
import { FormInput } from '../form-input'

import { StyledProfileNameButton } from './styles'

type ProfileNamePropsType = {
  userName: string
}

export const ProfileName: FC<ProfileNamePropsType> = ({ userName }) => {
  const [
    onSubmit,
    { handleSubmit, control, errors, setValue, setError, watch },
    { isLoading: isUpdating, error: updateUserNameError, trigger: trigger },
  ] = useFormData<UpdateUserNameType>('updateUserName')

  console.log(errors)
  const [isEdit, setIsEdit] = useState(false)

  useEffect(() => setValue('name', userName), [])

  return isEdit ? (
    <Form onFinish={handleSubmit(onSubmit)}>
      <>
        <Space.Compact style={{ width: '250px', height: '30px', marginBottom: '25px' }}>
          <FormInput name="name" control={control} error={errors.name}>
            <StyledProfileNameButton
              onClick={() => {
                setIsEdit(false)
                setValue('name', userName)
              }}
              danger
            >
              <CloseOutlined />
            </StyledProfileNameButton>
            <StyledProfileNameButton htmlType={'submit'} style={{ border: '1px solid #1677ff' }}>
              <Space>
                <CheckOutlined style={{ color: 'blue' }} />
              </Space>
            </StyledProfileNameButton>
          </FormInput>
        </Space.Compact>
      </>
    </Form>
  ) : (
    <span style={{ marginBottom: '28px' }}>
      <StyledUserName
        onClick={() => {
          setIsEdit(true)
        }}
      >
        {userName}
      </StyledUserName>
      <span>
        <EditOutlined
          onClick={() => {
            setIsEdit(true)
          }}
          style={{ color: 'blue', cursor: 'pointer' }}
        />
      </span>
    </span>
  )
}
