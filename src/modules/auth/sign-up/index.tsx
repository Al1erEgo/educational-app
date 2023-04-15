import { Form } from 'antd'

import { ErrorServerHandler } from '../../../components/error-server-handler/error-server-handler'
import { MAIN_PATH } from '../../../constants'
import { FormButton, FormInput } from '../components'
import { AUTH_PATH } from '../constants'
import { useFormData } from '../hooks/use-form-data'
import { cardHeadStyle, StyledCard, StyledNavLink, StyledP } from '../styles'

export const SignUp = () => {
  const [{ handleSubmit, control, errors }, { isLoading, error }, onSubmit] = useFormData('signup')

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
      <StyledNavLink to={`${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`}>Sign In</StyledNavLink>
    </StyledCard>
  )
}
