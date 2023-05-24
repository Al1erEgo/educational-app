import { FieldError } from 'react-hook-form'

export const getValidationStatus = (error?: FieldError) => error && 'error'
