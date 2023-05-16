import { FC, useEffect } from 'react'

import { Form } from 'antd'
import { Controller, ControllerRenderProps } from 'react-hook-form'
import { FieldValues } from 'react-hook-form/dist/types'

import { ErrorServerHandler } from '../../../../components'
import { useFormData } from '../../hooks'
import { StyledProfileParagraph } from '../../pages/profile/styles'
import { UpdateUserNameType } from '../../types'

type ProfileNamePropsType = {
  userName: string
}

export const ProfileName: FC<ProfileNamePropsType> = ({ userName }) => {
  const [
    onSubmit,
    { handleSubmit, control, errors, setValue, setError },
    { isLoading: isUpdating, error: updateUserNameError },
  ] = useFormData<UpdateUserNameType>('updateUserName')

  const customHandleSubmit = async (
    value: string,
    field: ControllerRenderProps<FieldValues, 'name'>
  ) => {
    if (!value) {
      setError('name', {
        type: 'custom',
        message: 'Name should be at least 1 character length',
      })

      return
    }
    if (value === userName) return
    field.onBlur()
    field.onChange(value)
    handleSubmit(onSubmit)(value)
  }

  useEffect(() => setValue('name', userName), [])

  return (
    <>
      <Form.Item
        validateStatus={errors?.name?.message ? 'error' : ''}
        help={errors?.name?.message}
      >
        <Controller
          name={'name'}
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <StyledProfileParagraph
                editable={{
                  onChange: value => customHandleSubmit(value, field),
                }}
                disabled={isUpdating}
              >
                {field.value}
              </StyledProfileParagraph>
            </>
          )}
        />
      </Form.Item>
      <ErrorServerHandler error={updateUserNameError} />
    </>
  )
}
