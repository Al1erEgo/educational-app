import { useForm } from 'react-hook-form'

import { useRegisterMutation } from '../auth-api'

type SignUpFormInputs = {
  email: string
  password: string
  rememberMe: boolean
}

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInputs>()
  const [registerUser, { isLoading, isError, error }] = useRegisterMutation()

  const onSubmit = async (data: SignUpFormInputs) => {
    await registerUser(data).unwrap()
  }

  console.log('isLoading', isLoading)
  console.log('isError', isError)

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
        Submit
      </button>
    </form>
  )
}
