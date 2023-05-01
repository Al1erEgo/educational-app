type UserEntityType = {
  _id: string
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string
  verified: boolean
  publicCardPacksCount: number
  created: Date
  updated: Date
  __v: number
}

type ValidationBaseDataType = {
  email: string
  password: string
}

export type RegisterRequestType = ValidationBaseDataType & {
  'confirm password': string
}

export type RegisterResponseType = {
  addedUser: UserEntityType
  error?: string
}

export type LoginRequestType = ValidationBaseDataType & {
  rememberMe: boolean
}

export type LoginResponseType = UserEntityType & {
  token: string
  tokenDeathTime: number
  avatar?: string
  error?: string
}

export type AuthMeRequestType = void | string
export type AuthMeResponseType = LoginResponseType

export type UpdateRequestType = {
  name: string
  avatar?: string
}
export type UpdateResponseType = {
  updatedUser: Omit<LoginResponseType, 'error'>
  token: string
  tokenDeathTime: number
  error?: string
}

export type LogOutRequestType = {} | void
export type LogOutResponseType = {
  info: string
  error?: string
}

export type PasswordResetRequestType = {
  email: string
}
export type PasswordResetResponseType = {
  info: string
  success: boolean
  answer: string
  html: boolean
  error?: string
}

export type SetNewPasswordRequestType = {
  password: string
  resetPasswordToken: string
}
export type SetNewPasswordResponseType = {
  info: string
}

export type AuthApiResponseTypes =
  | RegisterResponseType
  | LoginResponseType
  | UpdateResponseType
  | LogOutResponseType
  | PasswordResetResponseType
  | SetNewPasswordResponseType
