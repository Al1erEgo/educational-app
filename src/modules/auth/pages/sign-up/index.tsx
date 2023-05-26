import { Form } from 'antd'

import { ErrorMessageHandler } from '@/components'
import {
  ConfirmationMessage,
  FormButton,
  FormInput,
} from '@/modules/auth/components'
import { ABSOLUTE_AUTH_PATH } from '@/modules/auth/constants'
import { useFormData } from '@/modules/auth/hooks'
import { StyledCard, StyledNavLink, StyledP } from '@/modules/auth/styles'
import { SignUpFormInputs } from '@/modules/auth/types'

export const SignUp = () => {
  const [
    onSubmit,
    { handleSubmit, control, errors },
    { isLoading, isSuccess, error },
  ] = useFormData<SignUpFormInputs>('signup')

  if (isSuccess) {
    return <ConfirmationMessage variant={'signUp'} />
  }

  return (
    <StyledCard title={'Sign Up'}>
      <Form onFinish={handleSubmit(onSubmit)}>
        <FormInput name="email" control={control} error={errors.email} />
        <FormInput name="password" control={control} error={errors.password} />
        <FormInput
          name="confirm password"
          control={control}
          error={errors['confirm password']}
        />
        <ErrorMessageHandler serverError={error} />
        <FormButton loading={isLoading}>Sign Up</FormButton>
      </Form>
      <StyledP>Already have an account?</StyledP>
      <StyledNavLink to={ABSOLUTE_AUTH_PATH.SignIn}>Sign In</StyledNavLink>
    </StyledCard>
  )
}
