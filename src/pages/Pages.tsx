import { Route } from 'react-router-dom'

import { PATH } from '../constants/path'

import { Error404 } from './error404'
import { TestPage } from './testPage'

export const Pages = () => {
  return (
    <>
      <Route path={`${PATH.Root}`} element={<TestPage />} />
      <Route path={`${PATH.Other}`} element={<Error404 />} />
    </>
  )
}
