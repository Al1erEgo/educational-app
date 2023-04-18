import { Form } from 'antd'

import { ErrorServerHandler } from '../../../../components'
import { FormButton, FormInput } from '../../components'
import { ConfirmationMessage } from '../../components/confirmation-message'
import { confirmationMessageArguments } from '../../components/confirmation-message/constants'
import { ABSOLUTE_AUTH_PATH } from '../../constants'
import { ResetPasswordFormInputs } from '../../hooks/use-authform/types'
import { useFormData } from '../../hooks/use-form-data'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledP, StyledText } from '../../styles'

export const ResetPassword = () => {
  const [onSubmit, { handleSubmit, control, errors }, { isLoading, isSuccess, error }] =
    useFormData<ResetPasswordFormInputs>('resetPassword')
  const { title, text, propsPath, image } = confirmationMessageArguments.resetPassword

  if (isSuccess) {
    return <ConfirmationMessage title={title} text={text} propsPath={propsPath} image={image} />
  }

  return (
    <StyledCard title={'Forgot your password?'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <FormInput name="email" control={control} error={errors.email} />
        <StyledText type="secondary">
          Enter your email address and we will send you further instructions
        </StyledText>

        <ErrorServerHandler error={error} />

        <FormButton loading={isLoading}>Send Instructions</FormButton>
      </Form>
      <StyledP>Did you remember your password?</StyledP>

      <StyledNavLink to={ABSOLUTE_AUTH_PATH.SignIn}>Try logging in</StyledNavLink>
    </StyledCard>
  )
}
