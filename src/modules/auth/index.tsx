import React from 'react'

import { Route, Routes, useResolvedPath } from 'react-router-dom'

import { AuthProvider, Error404 } from '../../components'
import { useDefaultPage } from '../../hooks/use-main-page'

import { AUTH_PATH } from './constants'
import { NewPassword } from './modules/new-password'
import { Profile } from './modules/profile'
import { ResetPassword } from './modules/reset-password'
import { SignIn } from './modules/sign-in'
import { SignUp } from './modules/sign-up'
import { AuthContainer } from './styles'

export const Auth = () => {
  const path = useResolvedPath('')

  const { defaultPage } = useDefaultPage(
    `${path.pathname}${AUTH_PATH.Profile}`,
    `${path.pathname}${AUTH_PATH.SignIn}`
  )

  return (
    <AuthContainer>
      <Routes>
        <Route path={`${AUTH_PATH.Root}`} element={defaultPage} />
        <Route element={<AuthProvider />}>
          <Route path={`${AUTH_PATH.Profile}`} element={<Profile />} />
        </Route>
        <Route path={`${AUTH_PATH.SignIn}`} element={<SignIn />} />
        <Route path={`${AUTH_PATH.SignUp}`} element={<SignUp />} />
        <Route path={`${AUTH_PATH.NewPassword}`} element={<NewPassword />} />
        <Route path={`${AUTH_PATH.ResetPassword}`} element={<ResetPassword />} />
        <Route path={AUTH_PATH.Error} element={<Error404 />} />
      </Routes>
    </AuthContainer>
  )
}

// import { Navigate, Route, Routes, useResolvedPath } from 'react-router-dom'
//
// import { MAIN_PATH } from '../../constants'
// import { Error404 } from '../../pages/error404'
//
// import { AUTH_PATH } from './constants'
// import { NewPassword } from './new-password'
// import { Profile } from './profile'
// import { ResetPassword } from './reset-password'
// import { SignIn } from './sign-in'
// import { SignUp } from './sign-up'
// import { AuthContainer } from './styles'
//
// export const Auth = () => {
//   const path = useResolvedPath('')
//
//   const defaultAuthPage = <Navigate to={`${path.pathname}${AUTH_PATH.SignIn}`} />
//   const authRoutes = [
//     {
//       path: AUTH_PATH.Root,
//       element: defaultAuthPage,
//     },
//     { path: AUTH_PATH.SignIn, element: <SignIn /> },
//     { path: AUTH_PATH.SignUp, element: <SignUp /> },
//     { path: AUTH_PATH.NewPassword, element: <NewPassword /> },
//     { path: AUTH_PATH.ResetPassword, element: <ResetPassword /> },
//     { path: AUTH_PATH.Profile, element: <Profile /> },
//     { path: AUTH_PATH.Error, element: <Error404 /> },
//   ]
//
//   return (
//     <AuthContainer>
//       <Routes>
//         {authRoutes.map(route => (
//           <Route key={route.path} path={route.path} element={route.element} />
//         ))}
//         <Route path={`${MAIN_PATH.Error}`} element={<Error404 />} />
//       </Routes>
//     </AuthContainer>
//   )
// }
