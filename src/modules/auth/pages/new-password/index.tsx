import { FC } from 'react'

import { Form } from 'antd'
import { useParams } from 'react-router-dom'

import { ErrorMessageHandler } from '@/components'
import { ConfirmationMessage, FormButton, FormInput } from '@/modules/auth/components'
import { ABSOLUTE_AUTH_PATH } from '@/modules/auth/constants'
import { useFormData } from '@/modules/auth/hooks'
import { StyledCard, StyledNavLink, StyledText } from '@/modules/auth/styles'
import { NewPasswordFormInputs } from '@/modules/auth/types'

export const NewPassword: FC = () => {
  const { token } = useParams()
  const [onSubmit, { handleSubmit, control, setError, errors }, { isLoading, error, isSuccess }] =
    useFormData<NewPasswordFormInputs>('newPassword')

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
    <StyledCard title={'Create new Password'}>
      <Form onFinish={handleSubmit(handleNewPasswordSubmit)}>
        <FormInput name="password" control={control} error={errors.password} />
        <StyledText type="secondary">Create new password and we will send you further instructions to email</StyledText>
        <ErrorMessageHandler serverError={error} />
        <FormButton loading={isLoading}>Create new Password</FormButton>
      </Form>
      <StyledNavLink to={ABSOLUTE_AUTH_PATH.ResetPassword}>Back to Send Email form</StyledNavLink>
    </StyledCard>
  )
}
