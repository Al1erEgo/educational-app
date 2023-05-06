export const validateModalInputNameName = (name: string | undefined) => {
  if (name && name.length > 100) {
    return 'Pack name should be between 1 and 100 characters long'
  }

  return ''
}
