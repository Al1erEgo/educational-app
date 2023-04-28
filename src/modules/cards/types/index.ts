import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

export type CardsSearchWrapperProps = {
  size?: 'big' | 'small'
}

export type TableErrorType = FetchBaseQueryError | SerializedError | undefined
