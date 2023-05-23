import { FC } from 'react'

import { Form } from 'antd'
import { useParams } from 'react-router-dom'

import { ErrorServerHandler } from '../../../../components'
import { FormButton, FormInput, ConfirmationMessage } from '../../components'
import { ABSOLUTE_AUTH_PATH } from '../../constants'
import { useFormData } from '../../hooks'
import {
  cardHeadStyle,
  StyledCard,
  StyledNavLink,
  StyledText,
} from '../../styles'
import { NewPasswordFormInputs } from '../../types'

export const NewPassword: FC = () => {
  const { token } = useParams()
  const [
    onSubmit,
    { handleSubmit, control, setError, errors },
    { isLoading, error, isSuccess },
  ] = useFormData<NewPasswordFormInputs>('newPassword')

  const handleNewPasswordSubmit = async (data: NewPasswordFormInputs) => {
    if (!token) {
      setError('error', { message: 'Something wrong with token' })

      return
    }
    await onSubmit({ ...data, resetPasswordToken: token })
  }

  if (isSuccess) {
    return <ConfirmationMessage variant={'newPassword'} />
  }

  return (
    <StyledCard title={'Create new Password'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(handleNewPasswordSubmit)}>
        <FormInput name="password" control={control} error={errors.password} />
        <StyledText type="secondary">
          Create new password and we will send you further instructions to email
        </StyledText>
        <ErrorServerHandler error={error} />
        <FormButton loading={isLoading}>Create new Password</FormButton>
      </Form>
      <StyledNavLink to={ABSOLUTE_AUTH_PATH.ResetPassword}>
        Back to Send Email form
      </StyledNavLink>
    </StyledCard>
  )
}
