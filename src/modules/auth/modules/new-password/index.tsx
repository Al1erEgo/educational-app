import { Form } from 'antd'
import { useParams } from 'react-router-dom'

import { ErrorServerHandler } from '../../../../components'
import { FormButton, FormInput } from '../../components'
import { ABSOLUTE_AUTH_PATH } from '../../constants'
import { NewPasswordFormInputs } from '../../hooks/use-authform/types'
import { useFormData } from '../../hooks/use-form-data'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledText } from '../../styles'

export const NewPassword = () => {
  const { token } = useParams()
  const [onSubmit, { handleSubmit, control, setError, errors }, { isLoading, error }] =
    useFormData<NewPasswordFormInputs>('newPassword')

  const handleNewPasswordSubmit = async (data: NewPasswordFormInputs) => {
    if (!token) {
      setError('error', { message: 'Something wrong with token' })

      return
    }
    await onSubmit({ ...data, resetPasswordToken: token })
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
      <StyledNavLink to={ABSOLUTE_AUTH_PATH.ResetPassword}>Back to Send Email form</StyledNavLink>
    </StyledCard>
  )
}
