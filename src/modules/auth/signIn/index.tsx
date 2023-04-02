import { useForm } from 'react-hook-form'

import { useLoginMutation } from '../auth-api'

type SignInFormInputs = {
  email: string
  password: string
  rememberMe: boolean
}

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInputs>()
  const [loginUser, { isLoading, isError, error }] = useLoginMutation()

  const onSubmit = async (data: SignInFormInputs) => {
    await loginUser(data).unwrap()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email:
        <input type="text" {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}
      </label>

      <label>
        Password:
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <span>This field is required</span>}
      </label>

      <label>
        Remember me:
        <input type="checkbox" {...register('rememberMe')} />
      </label>

      {/*{isError && <span>An error occurred: {error?.message}</span>}*/}

      <button type="submit" disabled={isLoading}>
        Sign In
      </button>
    </form>
  )
}
