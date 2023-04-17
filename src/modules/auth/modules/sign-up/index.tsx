import { Form } from 'antd'

import { ErrorServerHandler } from '../../../../components'
import { FormButton, FormInput } from '../../components'
import { ABSOLUTE_AUTH_PATH } from '../../constants'
import { SignUpFormInputs } from '../../hooks/use-authform/types'
import { useFormData } from '../../hooks/use-form-data'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledP } from '../../styles'

import { GoToLoginMessage } from './components'

export const SignUp = () => {
  const [onSubmit, { handleSubmit, control, errors }, { isLoading, isSuccess, error }] =
    useFormData<SignUpFormInputs>('signup')

  if (isSuccess) {
    return <GoToLoginMessage />
  }

  return (
    <StyledCard title={'Sign Up'} headStyle={cardHeadStyle}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <FormInput name="email" control={control} error={errors.email} />
        <FormInput name="password" control={control} error={errors.password} />
        <FormInput name="confirm password" control={control} error={errors['confirm password']} />
        <ErrorServerHandler error={error} />
        <FormButton loading={isLoading}>Sign Up</FormButton>
      </Form>
      <StyledP>Already have an account?</StyledP>
      <StyledNavLink to={ABSOLUTE_AUTH_PATH.SignIn}>Sign In</StyledNavLink>
    </StyledCard>
  )
}
