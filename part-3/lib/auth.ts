import axios from 'axios'
import { Request, Response } from 'express'
import Router from 'next/router'
axios.defaults.withCredentials = true

const WINDOW_USER_SCRIPT_VARIABLE = '__USER__'

export const loginUser = async (email: string, password: string) => {
  const { data } = await axios.post('/api/login', { email, password })
  console.log(data)
  if (typeof window !== 'undefined') {
    window[WINDOW_USER_SCRIPT_VARIABLE as any] = data || {}
  }
}

export const getUserProfile = async () => {
  const { data } = await axios.get('/api/profile')
  return data
}

export const getServerSideToken = (req: Request) => {
  const { signedCookies = {} } = req
  if (!signedCookies) {
    return {}
  } else if (!signedCookies.token) {
    return {}
  }
  return { user: signedCookies.token }
}

export const getClientSideToken = () => {
  if (typeof window !== 'undefined') {
    const user = window[WINDOW_USER_SCRIPT_VARIABLE as any] || {}
    return { user }
  }
  return { user: {} }
}

export const getUserScript = (user: any) => {
  return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)}`
}

const redirectUser = (res: Response, path: string) => {
  if (res) {
    res.redirect(302, path)
    res.finished = true
    return {}
  }
  Router.replace(path)
  return {}
}

export const authInitialProps = (isProtectedRoute?: boolean) => ({
  req,
  res,
}: {
  req: Request
  res: Response
}) => {
  const auth = req ? getServerSideToken(req) : getClientSideToken()
  const currentPath = req ? req.url : window.location.pathname
  const user = auth.user
  const isAnonymous = !user || user.type !== 'authenticated'
  if (isProtectedRoute && isAnonymous && currentPath !== '/login') {
    return redirectUser(res, '/login')
  }
  return { auth }
}

export const logoutUser = async () => {
  if (typeof window !== 'undefined') {
    window[WINDOW_USER_SCRIPT_VARIABLE as any] = {} as any
  }
  await axios.post('/api/logout')
  Router.push('/login')
}
