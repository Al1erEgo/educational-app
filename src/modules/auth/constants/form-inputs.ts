export const formInputs = {
  email: {
    name: 'email' as const,
    controlName: 'email' as const,
    type: undefined,
    rules: { required: true },
    placeholder: 'Email',
    autoComplete: 'email',
  },
  password: {
    name: 'password' as const,
    controlName: 'password' as const,
    type: 'password',
    rules: { required: true },
    placeholder: 'Password',
    autoComplete: 'new-password',
  },
  'confirm password': {
    name: 'confirm password' as const,
    controlName: 'confirm password' as const,
    type: 'password',
    rules: { required: true },
    placeholder: 'Confirm password',
    autoComplete: 'new-password',
  },
  name: {
    name: 'name' as const,
    controlName: 'name' as const,
    type: undefined,
    rules: { required: true },
    placeholder: '',
    autoComplete: undefined,
  },
}
