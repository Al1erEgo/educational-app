import { FC } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { Form } from 'antd'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'
import * as yup from 'yup'

import successRegistrationImage from '@/assets/success-registration.png'
import { ErrorMessage } from '@/components'
import { MAIN_PATH } from '@/constants'
import { useSetNewPasswordMutation } from '@/modules/auth/api'
import { ConfirmationMessage, FormButton, FormInput } from '@/modules/auth/components'
import { AUTH_PATH, passwordSchema } from '@/modules/auth/constants'
import { StyledCard, StyledNavLink, StyledText } from '@/modules/auth/styles'
import { NewPasswordFormInputs } from '@/modules/auth/types'

export const NewPasswordPage: FC = () => {
  const { token } = useParams()
  const [onSubmit, { isLoading, error, isSuccess }] = useSetNewPasswordMutation()

  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm<NewPasswordFormInputs>({
    mode: 'all',
    resolver: yupResolver(
      yup.object<NewPasswordFormInputs, any>({
        password: passwordSchema,
      })
    ),
  })

  const handleNewPasswordSubmit = async (data: NewPasswordFormInputs) => {
    if (!token) {
      setError('error', { message: 'Something wrong with token' })

      return
    }
    await onSubmit({ ...data, resetPasswordToken: token })
  }

  if (isSuccess) {
    return (
      <ConfirmationMessage
        title={'Success!'}
        text={'Your password has been successfully changed, please go to login!'}
        redirectPath={`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`}
        image={successRegistrationImage}
        timer={true}
      />
    )
  }

  return (
    <StyledCard title={'Create new Password'}>
      <Form onFinish={handleSubmit(handleNewPasswordSubmit)}>
        <FormInput name="password" control={control} error={errors.password} />
        <StyledText type="secondary">Create new password and we will send you further instructions to email</StyledText>
        <ErrorMessage serverError={error} />
        <FormButton loading={isLoading}>Create new Password</FormButton>
      </Form>
      <StyledNavLink to={`${MAIN_PATH.Auth}${AUTH_PATH.ResetPassword}`}>Back to Send Email form</StyledNavLink>
    </StyledCard>
  )
}
