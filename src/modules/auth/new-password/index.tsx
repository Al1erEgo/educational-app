import { Button, Form } from 'antd'
import { useParams } from 'react-router-dom'

import { ErrorServerHandler } from '../../../components/error-handler/error-server-handler'
import { MAIN_PATH } from '../../../constants'
import { useSetNewPasswordMutation } from '../api'
import { FormInput } from '../components/form-input'
import { AUTH_PATH } from '../constants'
import { useFormWithValidation, useSubmit } from '../hooks'
import { NewPasswordFormInputs } from '../hooks/use-authform/types'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledText } from '../styles'

export const NewPassword = () => {
  const { handleSubmit, control, setError, errors } =
    useFormWithValidation<NewPasswordFormInputs>('newPassword')

  const [newPassword, { isLoading, error }] = useSetNewPasswordMutation()

  const { token } = useParams()

  const onSubmit = useSubmit(newPassword, `${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`)

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
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            loading={isLoading}
            style={{ fontWeight: '500' }}
            block
          >
            Create new Password
          </Button>
        </Form.Item>
      </Form>
      <StyledNavLink to={`${MAIN_PATH.Auth}${AUTH_PATH.ResetPassword}`}>
        Back to Send Email form
      </StyledNavLink>
    </StyledCard>
  )
}
